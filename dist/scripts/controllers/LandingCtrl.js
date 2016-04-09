   (function () {
     function LandingCtrl(Room) {
         this.chatrooms = Room.all;
         console.log(Room.all);
         
     }

     angular
         .module('blocChat')
         .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();