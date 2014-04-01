   
$(document).ready(function() {

  var priceSettings = {
    small: {
      population_start: 0,
      population_end: 49999,
      price_base: 1000,
      support_hours: 5,
      multiplier: 0.07
    },
    medium: {
      population_start: 50000,
      population_end: 199999,
      price_base: 5000,
      support_hours: 50,
      multiplier: 0.05
    },
    large: {
      population_start: 200000,
      population_end: 799999,
      price_base: 15000,
      support_hours: 150,
      multiplier: 0.04
    },
    metro: {
      population_start: 800000,
      population_end: 1000000,
      price_base: 30000,
      support_hours: 150,
      multiplier: 0.03
    },
  };

  var price = {
      total_price: 0,
      total_price_label: 0,
      per_capita: 0,
      population: 0,
      population_label: 0,
      
      price_base_label: 0

    };


  function updateBox(size) {
    if($('.category.' + size).hasClass('active') ) {


    }
    else {
      $('.category').removeClass('active');  
      $('.category.' + size).addClass('active');
    }
    

    
  };

  function determinePrice(value) {
      var range;
      var currentPrice = 0;

      for (size in priceSettings) {
        range = rangeMatch(value, size);
        console.log(size);
        if (range) { 
          currentPrice = priceFormula(range, value);
          updateBox(size);
        }
      }
      
      return currentPrice;
  };

  function rangeMatch(value, size) {
    currentRange = priceSettings.small;
    
    if(size) {
      currentRange = priceSettings[size];
    }
    
    if (value >= currentRange.population_start && value <= currentRange.population_end ) {      
      return currentRange;
    }


  }

  function priceFormula(range, population) {

    var currentPrice = 0;

    if (range.population_start >= 800000) {
      currentPrice = range.price_base + (range.multiplier * 800000);  
    }
    else {
      currentPrice = range.price_base + (range.multiplier * population);  
    }

    // Per capita
    if (population == 0 ) {
      price.per_capita = 0;
    }
    else {
      price.per_capita = Number(currentPrice / population).toFixed(2);
    }

    price.population = population;
    price.total_price = Math.floor(currentPrice);
    price.total_price_label = Math.floor(currentPrice);

    price.population_label = population;


    price.price_base_label = range.price_base;

    if (range.population_start >= 800000) {
      price.population_label = "800,000 and up";
      price.total_price_label = Math.floor(currentPrice) + " and up";      
      price.price_base_label = range.price_base + " and up"
    }


    return price;
  }

  var defaultPopulation = 200000;

  $( "#slider" ).slider({
      value:defaultPopulation,
      min: 0,
      max: 1000000,
      step: 40,
      slide: function( event, ui ) {


        price = determinePrice(ui.value);


        $( "#price" ).val( "$" + price.per_capita);
        $( "#total_price" ).val( "$" + price.total_price_label );
        $( "#population" ).val(price.population_label );
        $( "#price_base" ).val(price.price_base_label );


      }
    });
  

  price = determinePrice(defaultPopulation);
  $( "#price" ).val( "$" + price.per_capita);
  $( "#total_price" ).val( "$" + price.total_price );
  $( "#population" ).val(price.population );
  $( "#price_base" ).val(price.price_base_label );


});