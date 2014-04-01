   
$(document).ready(function() {

  var priceSettings = {
    small: {
      population_start: 0,
      population_end: 49999,
      range_start: 0,
      range_end: 10,
      price_base: 1000,
      support_hours: 5,
      multiplier: 0.07
    },
    medium: {
      population_start: 50000,
      population_end: 199999,
      range_start: 11,
      range_end: 20,
      price_base: 5000,
      support_hours: 50,
      multiplier: 0.05
    },
    large: {
      population_start: 200000,
      population_end: 799999,
      range_start: 21,
      range_end: 30,
      price_base: 15000,
      support_hours: 150,
      multiplier: 0.04
    },
    metro: {
      population_start: 800000,
      population_end: 1000000,
      range_start: 31,
      range_end: 40,
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
      // Do nothing.
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
    
    if (value >= currentRange.range_start && value <= currentRange.range_end ) {      
      return currentRange;
    }
  };

  function updatePriceDisplay(price) {

        $( "#price" ).val( "$" + price.per_capita);
        $( "#total_price" ).val( "$" + price.total_price_label );
        $( "#population" ).val(price.population_label );
        $( "#price_base" ).val("$" + price.price_base_label );

  };

  function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  };

  function priceFormula(range, value) {

    var currentPrice = 0;

    var population = 0;

    var rangeDifference = range.population_end - range.population_start;

    var rangeIncrement = rangeDifference / 10;

    population = Math.floor(value * rangeIncrement);

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
    price.total_price_label = commaSeparateNumber(Math.floor(currentPrice));
    price.population_label = commaSeparateNumber(population);


    price.price_base_label = commaSeparateNumber(range.price_base);

    if (range.population_start >= 800000) {
      price.population_label = "800,000 and up";
      price.total_price_label = commaSeparateNumber(Math.floor(currentPrice)) + " and up";      
      price.price_base_label = commaSeparateNumber(range.price_base) + " and up"
    }


    return price;
  }




  var defaultPopulation = 20;

  $( "#slider" ).slider({
      value:defaultPopulation,
      min: 0,
      max: 40,
      step: 1,
      slide: function( event, ui ) {
        price = determinePrice(ui.value);
        updatePriceDisplay(price);
      }
    });
  

  price = determinePrice(defaultPopulation);
  updatePriceDisplay(price);

});