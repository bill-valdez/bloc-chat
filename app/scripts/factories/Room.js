(function () {
        function Room($firebaseArray) {
            var firebaseRef = new Firebase('https://crackling-heat-508.firebaseio.com/');
            var rooms = $firebaseArray(firebaseRef.child('rooms'));
       

                    return {
                        all: rooms,
                        sayHello: function () {
                            alert("Hello from the Room factory!");
                        },
                        addRoom: function(){
                            rooms.$add({  
                                $value:"hello"
                            })
                        }
                    }
               
                }

                angular
                    .module('blocChat')
                    .factory('Room', ['$firebaseArray', Room]);
            })();