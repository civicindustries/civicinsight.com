$(document).ready(function () {
  'use strict';

  // var formUrl = 'https://script.google.com/macros/s/AKfycbwxvSZ-QDGB6SMUN0TS0_HX5Mwi7PvY2wV4WFPQLd8dXvFXM1U/exec';

  function showDepth(e) {
    $('#form-depth-sep').show();
    $('#form-depth').show(400);
    $('#get-blightstatus').css({ 'height': '1060px'});
  }

  $('#mce-FNAME').focus(showDepth);
  $('#mce-EMAIL').focus(showDepth);
  
  if (window.location.hash === '#interest') {
    showDepth();
  }
  
  // Collect and submit entries from the form.
  $('#ss-form').submit(function (e) {
    e.preventDefault();

    // Name and email
    // var data = {

      // document.getElementById('mce-FNAME').value = $('#entry_0').val();
      // document.getElementById('mce-LNAME').value = $('#entry_2').val();
      // document.getElementById('mce-EMAIL').value = $('#entry_1').val();
    // };

    // // How did they hear about us?
    // data.source = $('input[name="source"]:checked').val();
    // // Handle the "other" case
    // if (data.source === '') {
    //   data.source = $('#source-other').val();
    // }

    // // What type of work do they do?
    // data.work = $('input[name="work"]:checked').val();
    // if (data.work === '') {
    //   data.work = $('#work-other').val();
    // }

    // // What type of organization?
    // data.org = $('input[name="org"]:checked').val();
    // if (data.org === '') {
    //   data.org = $('#org-other').val();
    // }

    // // When will they collect data?
    // data.when = $('input[name="when"]:checked').val();

    $('#form-submit').val('Submitting...');

    $('#mc-embedded-subscribe-form').submit();
    // Record responses in the spreadsheet.
    // $.ajax({
    //   url: formUrl,
    //   data: data,
    //   dataType: 'jsonp'
    // }).always(function (data) {
    //   console.log(data);
      // Submit signup info to Campaign Monitor.
      // $('#hidden-name').val(data.name);
      // $('#hidden-email').val(data.email);
      // $('#hidden-form').submit();

      // $('#form-submit').val('Subscribe');
    // });

  });
});