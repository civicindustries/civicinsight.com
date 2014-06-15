(function( $ ){

   $.fn.placeHolder = function() {  
      var input = this;
      var text = input.attr('placeholder');  // make sure you have your placeholder attributes completed for each input field
      if (text) input.val(text).css({ color:'grey' });
      input.focus(function(){  
         if (input.val() === text) input.css({ color:'lightGrey' }).selectRange(0,0).one('keydown', function(){     
            input.val("").css({ color:'black' });  
         });
      });
      input.blur(function(){ 
         if (input.val() == "" || input.val() === text) input.val(text).css({ color:'grey' }); 
      }); 
      input.keyup(function(){ 
        if (input.val() == "") input.val(text).css({ color:'lightGrey' }).selectRange(0,0).one('keydown', function(){
            input.val("").css({ color:'black' });
        });               
      });
      input.mouseup(function(){
        if (input.val() === text) input.selectRange(0,0); 
      });   
   };

   $.fn.selectRange = function(start, end) {
      return this.each(function() {
        if (this.setSelectionRange) { this.setSelectionRange(start, end);
        } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true); 
            range.moveEnd('character', end); 
            range.moveStart('character', start); 
            range.select(); 
        }
      });
   };

})( jQuery );