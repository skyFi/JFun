(function(angular) {
  'use strict';
// declare a view
var myAppModule = angular.module('myApp', []);

// configure the view.
// in this example we will create a greeting filter
myAppModule.filter('greet', function() {
 return function(name) {
    return 'Hello, ' + name + '!';
  };
});
})(window.angular);