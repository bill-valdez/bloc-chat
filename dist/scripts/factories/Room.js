(function () {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase('https://crackling-heat-508.firebaseio.com/');
        var rooms = $firebaseArray(firebaseRef.child('rooms'));
        var messages = $firebaseArray(firebaseRef.child('messages'));

        return {
            all: rooms,
            addRoom: function (anything) {
                rooms.$add({
                    $value: anything
                })
            },
            getMessages: function (chatRoomId) {
                return $firebaseArray(firebaseRef.child('messages').orderByChild('roomId').equalTo(chatRoomId))
            },
            getRooms: function (roomId) {
                return $firebaseArray(firebaseRef.child('rooms').orderByChild('$id').equalTo(roomId));
            }
        }

    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();