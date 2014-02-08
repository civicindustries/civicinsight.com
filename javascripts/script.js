/**
 * Civic Industries LLC
 *  
 * Author: Eddie A Tejeda
 * @eddietejeda   
 * Credit: Thanks to @mohiuddinparekh for the parallax scrolling template

 */


$(document).ready(function() {
	
	// Cache the Window object
	$window = $(window);
                
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
                    
		$(window).scroll(function() {
			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!								
			var yPos = -($window.scrollTop() / $bgobj.data('speed')); 

			// Put together our final background position
			var coords = '50% '+ yPos + 'px';

			// Move the background
			$bgobj.css({ backgroundPosition: coords });
		}); // window scroll Ends
 	});

 	$('#nav a').click(function(e){
    
 		var target = $(this).attr('href').split("#");

    
    console.log( target[1] );
 		if( $('#'+target[1]).length){
      e.preventDefault();

	 		$.scrollTo( $('#'+target[1]).offset().top - 100, 200 , {easing:'swing'});		
 		}
    else{
      // window.location = target[0];
    }
 	});
  
  
  var query = BlightStatus.URL.getQueryParams();
  if(query.select && ($('input[name=PLAN]').length > 1) ){    
    // console.log("selected_plan",selected_plan);
    $('input[name=PLAN][value='+query.select+']').prop('checked',true);
  }
  
      
  
  $('#newsletter form').submit(function(e){
    
    e.preventDefault();
    var current_form = this;
    var formAction = $(this).attr('action');
    var formData = $(this).serialize();
      
    $.post( formAction, formData, function( data ) {
    }, "json").always(function(){
      $('#newsletter h1').empty();
      $('#newsletter form').html("<h3>Thank you. You will receive an email short to confirm your signup.</h3>");
      
      
    });
        
  });
    
  $('#signup form').submit(function(e){
    e.preventDefault();
    var current_form = this;
    var emailVal = $('#EMAIL').attr('value');
    var formAction = $(this).attr('action');
    var formData = $(this).serialize();


    $(this).find('input[type=submit]').val('Loading...').prop('disabled', true).css('background-color', "#aaa");
    
    

    $.post( formAction, formData, function( data ) {
      window.response = data;
      if(data.success == true){
        $('.error').hide();
        $(current_form).html('<h1>Thank you!</h1><br><h4 style="padding: 20px">You will recieve an email shortly.<br><br> Please confirm you email and we will contact you the next business-day.<br><br>If you encounter any difficulties, please contact us at support@civicinsight.com</h4><br><br>');
      } 
      else {
        // console.log(data);
        if(data.errors){
          for(var i = 0; i < data.errors.length; i++){                  
            $('input[name='+data.errors[i][0]+']').next('.error').html("<span>"+data.errors[i][1]+"</span>");
          }           
        }
      }              
    }, "json");
    
  });    
});





/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");
document.createElement("header");
document.createElement("footer");