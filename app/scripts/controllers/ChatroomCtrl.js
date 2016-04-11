(function () {
    function ChatroomCtrl(Room, roomInfo, Message, $cookies) {
        console.log(roomInfo);
        var chatRoomId = roomInfo[0]
        this.messageList = roomInfo[1]
        this.sendMessage = function () {
            //content,username,roomId
            var messageInfo = {
                contents: this.messageText,
                username: $cookies.get('blocChatCurrentUser'),
                roomId: chatRoomId
            }
            console.log(messageInfo);
            Message.send(messageInfo);
        }
    }

    angular
        .module('blocChat')
        .controller('ChatroomCtrl', ['Room', 'roomInfo', 'Message', '$cookies', ChatroomCtrl]);
})();