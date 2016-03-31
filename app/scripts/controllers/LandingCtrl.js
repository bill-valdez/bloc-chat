 (function () {
     function LandingCtrl(Room) {
         this.chatrooms = Room.all;
         console.log(Room.all);
         this.sayHi = Room.sayHello;
     }

     angular
         .module('blocChat')
         .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();