 (function() {
     function MyCtrl($scope, dep1, dep2) {
         this.heroTitle = "We want to hear whay you have to say!";
     }
 
     angular
         .module('blocChat')
         .controller('MyCtrl', [$scope, dep1, dep2, MyCtrl];
})();