 (function() {
     function LandingCtrl( Room ) {
     	// here's what our Room factory returns: inspect this array in the console to see the values! Then, assign it to something accessible from landing.html,
     	// like this.roomList.
     	console.log( Room.all );
     }
 
     angular
         .module('blocChat')
         .controller('LandingCtrl', [ 'Room', LandingCtrl ] );
})();