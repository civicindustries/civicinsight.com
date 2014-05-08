
$(document).ready(function() {
  CivicInsight.Pricing.init();
});

var CivicInsight = CivicInsight || {};
CivicInsight.Pricing = {

  // Settings for the pricing slider.
  priceSettings: {
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
  },

  // Default price.
  price: {
    total_price: 0,
    total_price_label: 0,
    per_capita: 0,
    population: 0,
    population_label: 0,
    price_base_label: 0,
    plan_fee_label: 0,
    price_5_years: 0
  },

  // Default fees.
  fees: {
    'house_facts': 1000,
    'partner': 5000,
    'custom': 15000
  },

  init: function(){
    // Set default range
    var rangeDefault = 50;

    // Make slider interactive.
    $( "#slider" ).slider({
        value: rangeDefault,
        min: 0.1,
        max: 100,
        step: 0.1,
        slide: function( event, ui ) {
          price = CivicInsight.Pricing.determinePrice(ui.value);
          CivicInsight.Pricing.updatePriceDisplay(price);
        }
      });

    // Update default settings on page load.
    CivicInsight.Pricing.updatePrice(rangeDefault);
    CivicInsight.Pricing.updatePriceTooltip();
    CivicInsight.Pricing.setupQuoteCalculator();

  },

  setupQuoteCalculator: function() {
    CivicInsight.Pricing.closeAnnualSubscriptionModal();
    CivicInsight.Pricing.closeSetupFeeModal();
  },

  closeAnnualSubscriptionModal: function() {
    var params = CivicInsight.Pricing.getParams(params);
    console.log(params);
    var population = $('#quote-annual-fee #population').val();
    var setup_fee = $('#quote-setup-fee input[name="data_plan"]').attr("checked",true).attr('amount');

    if(params.population && params.range) {
      var rangeDefault = CivicInsight.Pricing.getSliderRangeDefaultFromPopulation(params.population, params.range);
       console.log(rangeDefault);
       CivicInsight.Pricing.updatePrice(rangeDefault);

      if(params.population == undefined) {
        $('#quote-annual-fee #population').val(0);

      }
      else {
        $('#quote-annual-fee #population').val(params.population);
      }

      if(params.range !== undefined) {
        $('.category').removeClass('active');
        $('.category .' + params.range).addClass('active');
      }

      var annual_fee = $('#quote-annual-fee #total_price').val().replace("$",'');
      $('#annual-fee .amount').text(annual_fee);


      CivicInsight.Pricing.showShareButton();

    }

    if(params.setup_fee == undefined) {
      $('#setup-fee .amount').text("0");
    }
    else {
      if( $('#quote-setup-fee input[value="' + params.setup_fee + '"]') !== undefined ) {
        $('#quote-setup-fee input[value="' + params.setup_fee + '"]').attr("checked",true);
        var setup_amount = $('#quote-setup-fee input[value="' + params.setup_fee + '"]').attr("amount");
        $('#setup-fee .amount').text(setup_amount);
      }
    }

  },


  showShareButton: function() {
    $('.share').show();

    $('.share').click(function() {
      $('.share .url').text(window.location.href);
      $('.share .url').show();
    });
  },

  closeSetupFeeModal: function() {

  },

  updateQuote: function() {
    // change the class
    // update share button
    CivicInsight.Pricing.setupShareButton();
  },

  setupShareButton: function() {

  },

  getParams: function() {

    var path = window.location.hash
    var queryString = path;

    var params = {}, queries, temp, i, l;

    // Split into key/value pairs
    if(queryString !== undefined){

      queries = queryString.split("&");

      // Convert the array of strings into an object
      for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
      }
    }
    return params;
  },


  // Highlight current city in css.
  highlightCity: function(size) {
    // Only update if we are in a new range.
    if(!$('.category.' + size).hasClass('active') ) {
      $('.category').removeClass('active');
      $('.category.' + size).addClass('active');
    }
  },

  // Figure out price based on position on slider.
  determinePrice: function(value) {
      var range;
      var currentPrice = 0;

      for (size in CivicInsight.Pricing.priceSettings) {
        range = CivicInsight.Pricing.rangeMatch(value, size);
        if (range) {
          currentPrice = CivicInsight.Pricing.priceFormula(range, value);
          CivicInsight.Pricing.highlightCity(size);
        }
      }

      return currentPrice;
  },

  // Figure out which range we are in on the slider.
  rangeMatch: function(value, size) {
    currentRange = CivicInsight.Pricing.priceSettings.small;

    if(size) {
      currentRange = CivicInsight.Pricing.priceSettings[size];
    }

    if (value > currentRange.range_start && value <= currentRange.range_end ) {
      return currentRange;
    }
  },

  // Update display of price in markup.
  updatePriceDisplay: function(price) {
    $( "#total_price" ).val( "$" + price.total_price_label );
    $( "#population" ).val(price.population_label );
    CivicInsight.Pricing.updatePriceTooltip();
    CivicInsight.Pricing.updateURLParameters(price);
  },

  updateURLParameters: function(price) {
    console.log(price);
    var params = {};
    params.population = price.population;
    params.range = $('.category.active').attr('range');
    params.setup_fee = CivicInsight.Pricing.getImplementationSetting();

    window.location.hash = jQuery.param( params );
    console.log(params);

  },

  // Update display of price in markup.
  updatePriceTooltip: function() {
    var sliderPosition = $('.ui-slider-handle').offset();
    var sliderPositionX = sliderPosition.left - 150;
    $('#prices').offset({left: sliderPositionX});

    $('#quote-annual-fee').on('shown.bs.modal', function(){
      CivicInsight.Pricing.updatePriceTooltip();
      $('#prices').show();
    });

    $('#quote-annual-fee').on('hidden.bs.modal', function(){
      CivicInsight.Pricing.closeAnnualSubscriptionModal();
    });

  },

  // Get current fee based on radio box selection.
  getImplementationFee: function() {
    var selectedVal = CivicInsight.Pricing.getImplementationSetting();
    if(selectedVal) {
      var fee;
      fee = CivicInsight.Pricing.fees[selectedVal];
      return fee;
    }
  },

  getImplementationSetting: function() {
    var selected = $("input[type='radio'][name='data_plan']:checked");
    var selectedVal = 0;
    if (selected.length > 0) {
        selectedVal = selected.val();
    }
    return selectedVal;
  },

  // Convert number to comma-separated number (for display.)
  commaSeparateNumber: function(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  },

  getSliderRangeDefaultFromPopulation: function(population, range) {
    var rangeDefault = 0;
    var range = CivicInsight.Pricing.priceSettings[range];

    rangeDefault = ((Number(population) - range.population_start)/ range.range_slope) + range.range_subtract;
    return rangeDefault;
  },


  // Figure out pricing values to display.
  priceFormula: function(range, value) {
    var currentPrice = 0;

    var population = 0;
    var currentPlanFee = 0;

    // Population is calculated as the position on the slider times a multiplier
    // (The range slider is smoothed out, but increments at the 'medium city' are bigger than smaller city range.)
    population = Math.ceil((value-range.range_subtract) * range.range_slope) + range.population_start;
    population = Math.round(population / 10) * 10

    // Figure out which plan is selected.
    currentPlanFee = CivicInsight.Pricing.getImplementationFee();
    currentPrice = (range.multiplier * population);

    var price = CivicInsight.Pricing.price;
    price.per_capita = Number(currentPrice / population).toFixed(2);

    // Set values and put in object which can be rendered on the front end.
    price.population = population;
    price.total_price = Math.floor(currentPrice);
    price.total_price_label = CivicInsight.Pricing.commaSeparateNumber(Math.floor(currentPrice));
    price.population_label = CivicInsight.Pricing.commaSeparateNumber(population);

    price.price_base_label = CivicInsight.Pricing.commaSeparateNumber(currentPlanFee);

    return price;
  },

  // Update price.
  updatePrice: function(value) {
    var price;
    price = CivicInsight.Pricing.determinePrice(value);
    CivicInsight.Pricing.updatePriceDisplay(price);
  },


  updateURLParamsPricing: function(settings) {
    var settings = {

    }
    for (item in settings) {
      CivicInsight.Pricing.updateQueryStringParameter('#pricing', key, value);
    }
  },

  updateQueryStringParameter: function(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
      return uri + separator + key + "=" + value;
    }
  },
};
