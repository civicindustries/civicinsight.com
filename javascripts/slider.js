   
$(document).ready(function() {

  // Settings for the pricing slider.
  var priceSettings = {
    small: {
      population_start: 0,
      population_end: 50000,
      range_start: 0,
      range_end: 25,
      range_slope: 2000, //50000-0/25-0, // spelling slope calculations out, they are y2-y1/x2-x1
      range_subtract: 0,
      price_base: 1000, // base price for level
      support_hours: 10,
      multiplier: 0.07
    },
    medium: {
      population_start: 50001,
      population_end: 200000,
      range_start: 25,
      range_end: 50,
      range_slope: 6000, // 200000-50000/50-25
      range_subtract: 25,
      price_base: 3000,
      support_hours: 50,
      multiplier: 0.04
    },
    large: {
      population_start: 200001,
      population_end: 800000,
      range_start: 50,
      range_end: 75,
      range_slope: 24000, //800000-200000/75-50,
      range_subtract: 50,
      price_base: 6000,
      support_hours: 100,
      multiplier: 0.025
    },
    metro: {
      population_start: 800001,
      population_end: 1000000,
      range_start: 75,
      range_end: 100,
      range_slope: 8000, //1000000-800000/100-75,
      range_subtract: 75,
      price_base: 10000,
      support_hours: 150,
      multiplier: 0.025
    }
  };

  // Default price.
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

  // Default fees.
  var fees = {
    'house_facts': 1000,
    'partner': 5000,
    'custom': 15000
  };

  // function activateModals() {
    
  // }


  // Highlight current city in css.
  function highlightCity(size) {
    // Only update if we are in a new range.
    if(!$('.category.' + size).hasClass('active') ) {
      $('.category').removeClass('active');  
      $('.category.' + size).addClass('active');
    }    
  }

  // Figure out price based on position on slider.
  function determinePrice(value) {
      var range;
      var currentPrice = 0;

      for (size in priceSettings) {
        range = rangeMatch(value, size);
        if (range) { 
          currentPrice = priceFormula(range, value);
          highlightCity(size);
        }
      }
      
      return currentPrice;
  }

  // Figure out which range we are in on the slider.
  function rangeMatch(value, size) {
    currentRange = priceSettings.small;
    
    if(size) {
      currentRange = priceSettings[size];
    }
    
    if (value > currentRange.range_start && value <= currentRange.range_end ) {      
      return currentRange;
    }
  }

  // Update display of price in markup.
  function updatePriceDisplay(price) {
    $( "#total_price" ).val( "$" + price.total_price_label );
    $( "#population" ).val(price.population_label );
    updatePriceTooltip();
  }

  // Update display of price in markup.
  function updatePriceTooltip() {
    var sliderPosition = $('.ui-slider-handle').offset();
    var sliderPositionX = sliderPosition.left - 150;  
    $('#prices').offset({left: sliderPositionX});

    $('#quote-annual-fee').on('shown.bs.modal', function(){
      updatePriceTooltip();
      $('#prices').show();
    });
  }


  // Get current fee based on radio box selection.
  function getImplementationFee() {
    var selected = $("input[type='radio'][name='data_plan']:checked");
    var selectedVal = 0;
    if (selected.length > 0) {
        selectedVal = selected.val();
    }
    var fee;
    fee = fees[selectedVal];
    return fee;
  }

  // Convert number to comma-separated number (for display.)
  function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

  // Figure out pricing values to display.
  function priceFormula(range, value) {
    var currentPrice = 0;
    var currentPrice5Years = 0;
    var population = 0;
    var currentPlanFee = 0;

    // Population is calculated as the position on the slider times a multiplier
    // (The range slider is smoothed out, but increments at the 'medium city' are bigger than smaller city range.)
    console.log(value-range.range_subtract, range.range_slope);
    population = Math.ceil((value-range.range_subtract) * range.range_slope) + range.population_start;
    //population = Math.ceil((range.population_end * value ) / range.range_end);
    population = Math.round(population / 10) * 10 
    
    // Figure out which plan is selected.
    currentPlanFee = getImplementationFee();

    // If population is big, set the top end of the scale.
    // if (range.population_start >= 800000) {
    //   currentPrice = range.price_base + (range.multiplier * 800000); 
    //   currentPrice5Years = range.price_base + (range.multiplier * 800000); 
    // }
    // else {
      currentPrice = range.price_base + (range.multiplier * population);  
      currentPrice5Years = range.price_base + (currentPlanFee / 5) + (range.multiplier * population);  
    //}

    // Determine price per capita
    // if (population < 2 ) {
    //   // Keep bottom end of range from zero'ing out and showing big numbers.
    //   price.per_capita = 0;
    //   price.price_5_years = 0;
    // }
    // else {
      price.per_capita = Number(currentPrice / population).toFixed(2);
      
      // Total price ever, including set up fee.
      price.price_5_years = Number(currentPrice5Years / population).toFixed(2);
    //}



    // Set values and put in object which can be rendered on the front end.
    price.population = population;
    price.total_price = Math.floor(currentPrice);
    price.total_price_label = commaSeparateNumber(Math.floor(currentPrice));
    price.population_label = commaSeparateNumber(population);
    price.plan_fee_label = currentPlanFee;
    price.price_base_label = commaSeparateNumber(currentPlanFee);

    // Override value labels if population is large.
    // if (range.population_start >= 800000) {
    //   price.population_label = "800,000 and up";
    //   price.total_price_label = commaSeparateNumber(Math.floor(currentPrice)) + "+";  
    //   price.price_base_label = commaSeparateNumber(currentPlanFee) + "+";
    // }

    return price;
  }

  // Update price. 
  function updatePrice(value) {
    var price;
    price = determinePrice(value);
    updatePriceDisplay(price);
  }




  // @TODO finish
  // Add settings to URL bar so that price can be updated based on URL path.
  // 
  // function updateURLParamsPricing(settings) {
  //   var settings = {

  //   }
  //   for (item in settings) {
  //     updateQueryStringParameter('#pricing', key, value);
  //   }
  // }

  // function updateQueryStringParameter(uri, key, value) {
  //   var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  //   var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  //   if (uri.match(re)) {
  //     return uri.replace(re, '$1' + key + "=" + value + '$2');
  //   }
  //   else {
  //     return uri + separator + key + "=" + value;
  //   }
  // }







  // ------------------------------------

  // Set default range
  var rangeDefault = 50;

  // Set housefacts to be true by default.
  $("input[type='radio'][name='data_plan']").filter('[value="house_facts"]').attr('checked', true);


  // Make radio box interactive.
  $("input[type='radio'][name='data_plan']").change(function(){
    updatePrice($('#slider').slider("option", "value")  );
  });

  // Make slider interactive.
  $( "#slider" ).slider({
      value: rangeDefault,
      min: 0.1,
      max: 100,
      step: 0.1,
      slide: function( event, ui ) {
        price = determinePrice(ui.value);
        updatePriceDisplay(price);
      }
    });
  
  // Update default settings on page load.
  updatePrice(rangeDefault);
  updatePriceTooltip();
});