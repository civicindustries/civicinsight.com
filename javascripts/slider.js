   
$(document).ready(function() {

  var priceSettings = {
    small: {
      population_start: 100,
      population_end: 50000,
      range_start: 0,
      range_end: 10,
      range_subtract: 0,
      price_base: 1000,
      support_hours: 5,
      multiplier: 0.07
    },
    medium: {
      population_start: 50001,
      population_end: 200000,
      range_start: 11,
      range_subtract: 10,
      range_end: 20,
      price_base: 5000,
      support_hours: 50,
      multiplier: 0.05
    },
    large: {
      population_start: 200001,
      population_end: 800000,
      range_start: 21,
      range_subtract: 20,
      range_end: 30,
      price_base: 15000,
      support_hours: 150,
      multiplier: 0.04
    },
    metro: {
      population_start: 800001,
      population_end: 1000000,
      range_start: 31,
      range_subtract: 30,
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
      price_base_label: 0,
      plan_fee_label: 0,
      price_5_years: 0
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
        $( "#price_5_years" ).val("$" + price.price_5_years );
        // $( "#plan_fee" ).val("$" + price.plan_fee_label );
  };

  function getImplementationFee() {
    var selected = $("input[type='radio'][name='data_plan']:checked");
    var selectedVal = 0;
    if (selected.length > 0) {
        selectedVal = selected.val();
    }

    var fees = {
      'house_facts': 1000,
      'partner': 5000,
      'custom': 15000
    }

    var fee;
    fee = fees[selectedVal];
    return fee;
  }

  function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  };

  function priceFormula(range, value) {

    var currentPrice = 0;
    var currentPrice5Years = 0;
    var population = 0;
    var rangeDifference = range.population_end - range.population_start;
    var rangeIncrement = rangeDifference / 10;

    population = Math.ceil((value - range.range_subtract) * rangeIncrement);


    currentPlanFee = getImplementationFee();

    if (range.population_start >= 800000) {
      currentPrice = range.price_base + (range.multiplier * 800000); 
      currentPrice5Years =  range.price_base + (currentPlanFee / 5) + (range.multiplier * 800000);  
    }
    else {
      currentPrice = range.price_base + (range.multiplier * population);  
      currentPrice5Years = range.price_base + (currentPlanFee / 5) + (range.multiplier * population);  
    }

    // Per capita
    if (population < 2 ) {
      price.per_capita = 0;
      price.price_5_years = 0;
    }
    else {
      price.per_capita = Number(currentPrice / population).toFixed(2);
      price.price_5_years = Number(currentPrice5Years / population).toFixed(2);
    }




    price.population = population;
    price.total_price = Math.floor(currentPrice);
    price.total_price_label = commaSeparateNumber(Math.floor(currentPrice))  + " per year.";
    price.population_label = commaSeparateNumber(population);
    price.plan_fee_label = currentPlanFee;









    price.price_base_label = commaSeparateNumber(currentPlanFee) + " set up fee.";

    if (range.population_start >= 800000) {
      price.population_label = "800,000 and up";
      price.total_price_label = commaSeparateNumber(Math.floor(currentPrice)) + " and up";      
      price.price_base_label = commaSeparateNumber(currentPlanFee) + " and up" + " setup fee."
      price.price_5_years = price.total_price + (Math.floor(currentPlanFee / 5));
    }


    return price;
  };

  function updatePrice(value) {
    price = determinePrice(value);
    updatePriceDisplay(price);
  };


  var defaultPopulation = 20;
  $("input[type='radio'][name='data_plan']").filter('[value="house_facts"]').attr('checked', true);



  $("input[type='radio'][name='data_plan']").change(function(){
    
    updatePrice($('#slider').slider("option", "value")  );

  });

  $( "#slider" ).slider({
      value: defaultPopulation,
      min: 0,
      max: 40,
      step: 1,
      slide: function( event, ui ) {
        price = determinePrice(ui.value);
        updatePriceDisplay(price);
      }
    });
  
 
  updatePrice(defaultPopulation);


});