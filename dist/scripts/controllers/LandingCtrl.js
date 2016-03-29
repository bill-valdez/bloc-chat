 (function() {
     function LandingCtrl( Room ) {
     	console.log( Room.all );
     }
 
     angular
         .module('blocChat')
         .controller('LandingCtrl', [ 'Room', LandingCtrl ] );
})();