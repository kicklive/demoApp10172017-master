"use strict";
eventsApp.directive("enterclicked", function() {
  return {
    compile: function(element, attributes) {
      element.on("keydown", function(event) {
        if (isNumericKeyCode(event.keyCode)) {
          element.click();
        }
      });
    }
  };
  function isNumericKeyCode(keyCodes) {
    return event.keyCode === 13;
  }
});
