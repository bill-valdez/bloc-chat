   (function () {
     function LandingCtrl(Room) {
         this.chatrooms = Room.all;
         console.log(Room.all);
         //
         this.sayHi = Room.sayHello;
         console.log(Room);
         //
         this.addroom = Room.addRoom;
     }

     angular
         .module('blocChat')
         .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();