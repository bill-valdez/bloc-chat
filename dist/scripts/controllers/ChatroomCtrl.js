(function () {
  function ChatroomCtrl(Room,roomInfo) {
      console.log (roomInfo);
      this.sendMessage = function () {
          console.log("send message");
      }
  }

  angular
      .module('blocChat')
      .controller('ChatroomCtrl', ['Room','roomInfo', ChatroomCtrl]);
})();