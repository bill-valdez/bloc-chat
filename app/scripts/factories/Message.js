(function() {
  function Message($firebaseArray) {
    var firebaseRef = new Firebase('https://crackling-heat-508.firebaseio.com/');
    var messages = $firebaseArray(firebaseRef.child('messages'));

    return {
      send: function(newMessage) {
       messages.$add(newMessage)
       console.log(messages);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();