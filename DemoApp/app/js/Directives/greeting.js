'use strict'
eventsApp.directive('greeting', function() {
    return {
        restrict: 'E',
        priority:1,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        replace: true,
        controller:function($scope){
            var greetings=['hello'];
            $scope.sayHello=function(){
        alert(greetings.join());
    }
    this.addGreeting=function(greeting){
        greetings.push(greeting);
    }
        } 
        //controller:'@',
        //name:'ctrl'
        
    }

})
.directive('finnish',function(){
    return{
        restrict:'A',
        priority:2,
        require:'greeting' ,//the name of a directve that has a controller in it (on the same element). Use the carat to look up the directive 
        //and the transclude:true. Can't use transclude o a button though. Have to use it in the template html
        link:function(scope,element,attrs,controller){
            controller.addGreeting('hei');
        }
    }
})
.directive('hindi',function(){
    return{
        restrict:'A',
        priority:3,
        require:'greeting',
link:function(scope,element,attrs,controller){
    controller.addGreeting('hindi for hello');
}
    }
})

// eventsApp.controller('GreetingController',function GreetingController($scope){
//     $scope.sayHello=function(){
//         alert('Hello');
//     }
// });
