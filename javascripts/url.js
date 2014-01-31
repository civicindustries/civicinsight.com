var BlightStatus = BlightStatus || {};
BlightStatus.URL = {


	init: function(){

    
    window.History = {options: {html4Mode: true}};
	},


  getQueryParams: function(){
    return BlightStatus.URL.queryString(window.location.search.substr(1).split('&'));
  },
  
  
  getHashParams: function(name){
    return BlightStatus.URL.queryString(window.location.hash.substr(1).split('&'));
    
  },  
  
  updateHashParams: function(param){    
    
    if(typeof param !== 'object'){
      param = BlightStatus.URL.queryString(param.split('&'));      
    }

    var current = BlightStatus.URL.getHashParams();    
    var params = $.extend({}, current, param);    
    
    window.location.hash = jQuery.param( params );    
  },  


  setHashParams: function(params){
    
    if(typeof params === 'object'){
      params = $.param(params);
    }

    window.location.hash = '#' + params;
    
  },  
    
  setQueryParams: function(name){


    
  },  
  
  
  stripAgencyParam: function(form_object){
    var param_is_string = (typeof form_object == 'string'); //else it's object list
    
    
    if(param_is_string){
      form_object = BlightStatus.URL.queryString(form_object.split('&'));      
    }    
    if( typeof form_object.agency_id !== 'undefined'){ 
      delete form_object.agency_id;      
    }  
    
    if(param_is_string){
      //return as string
      return $.param( form_object );      
    }
    else{
      return form_object;
    }
  },
    
  
  

  parseQueryString : function( queryString ) {
    var params = {}, queries, temp, i, l;

    // Split into key/value pairs
    queries = queryString.split("&");

    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
      temp = queries[i].split('=');
      params[temp[0]] = temp[1];
    }

    return params;
  },
  
  
  queryString: function(a){
    if (a == "" || typeof a === "undefined") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i){
      var p=a[i].split('=');
      if (p.length != 2) continue;
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  },
  
    
  scrollToHash: function(){
    
    var element = '#'+BlightStatus.URL.getHashParams()['case_number'];
        
    if( $(element).length ) {          
      var accordion = $(element).prev().find('.workflow-accordion');      
      if($(accordion).data('hash-load-trigger')){        
        
        $(accordion).trigger($(accordion).data('hash-load-trigger'));        
        // BlightStatus.Window.goToByScroll( element );  
        return this;
      }
    }
  }
  
  


}

