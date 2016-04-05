   (function () {
     function LandingCtrl(Room) {
         this.chatrooms = Room.all;
         console.log(Room.all);
         this.addroom = function(openingDay){
             console.log(openingDay);
             Room.addRoom(openingDay);
         }
     }

     angular
         .module('blocChat')
         .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();