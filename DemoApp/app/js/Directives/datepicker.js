"use strict";
eventsApp.directive("datepicker", function() {
  return {
    restrict: "A",
    link: function(scope, element) {
      element.datepicker();
    }
  };
});
