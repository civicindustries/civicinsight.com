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
    e.preventDefault();
    
 		var target = $(this).attr('href').split("#");

    
    console.log( target[1] );
 		if( $('#'+target[1]).length){
	 		$.scrollTo( $('#'+target[1]).offset().top - 100, 200 , {easing:'swing'});		
 		}
    else{
      // window.location = target[0];
    }
    
    

 	});
  
  
  $('form').submit(function(e){
    e.preventDefault();
    var current_form = this;
    var emailVal = $('#EMAIL').attr('value');
    var formAction = $(this).attr('action');
    var formData = $(this).serialize();
    
    console.log(formAction);
    console.log(formData);
    
    

    $.ajax({
            dataType: "json",
            url: formAction,
            data: formData,
            success: function(){
              console.log(data);
              if(data.success == true){
                $('.error').hide();
                $(current_form).html('<h3>Thank you for giving us your email! We\'ll let you know when we\'ve launched.</h3></br>');
              } 
              else {
                $('.error').text('Something went wrong. Please try again.');
              }              
            }
          });
  });
              


});





/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");