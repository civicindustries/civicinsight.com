$(document).ready(function () {
  'use strict';

  //  $("#hear-other").attr("disabled",true);
  // $("#hname").removeAttr("disabled");

  // var formUrl = 'https://script.google.com/macros/s/AKfycbwxvSZ-QDGB6SMUN0TS0_HX5Mwi7PvY2wV4WFPQLd8dXvFXM1U/exec';

  function showDepth(e) {
    $('#form-depth-sep').show();
    $('#form-depth').show(400);
    $('#get-blightstatus').css({ 'height': '1125px'});
    // $('#form-depth').css({ 'height': '765px'});
  }

  
  $('#mce-FNAME').focus(showDepth);
  $('#mce-EMAIL').focus(showDepth);
  
  if (window.location.hash === '#interest') {
    showDepth();
  }

  
  // Collect and submit entries from the form.
  $('#mc-embedded-subscribe').click(function (e) {
    e.preventDefault();
    
    $('#get-blightstatus').css({ 'height': '300px'});
    $('#get-blightstatus-phrase').hide();
    $('#mc-embedded-subscribe-form').submit();

  });
});