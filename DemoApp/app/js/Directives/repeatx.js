"use strict";
eventsApp.directive("repeatX", function() { //function($compile)- don't need the $compile when usihng compile funtion
  return {
      //scope is not available in compile function
      compile: function(element, attributes) {
      for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
        element.after(element.clone().attr("repeat-x", 0));
      }
      return function(scope, element,attr,controller){
          attr.$observe('text',function(newValue){
              if(newValue==='Hello World'){
                  element.css('color','red');
              }
          });
      }
    }
    // link: function(scope, element, attributes, controller) {
    //   for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
    //     element.after($compile(element.clone().attr("repeat-x", 0))(scope));
    //   }
    // }
  };
});
