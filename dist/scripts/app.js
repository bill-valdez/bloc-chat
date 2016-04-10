(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/templates/home.html'
            })
            .state('chatroom', {
                url: '/chatroom-{id}',
                templateUrl: '/templates/chatroom.html',
                controller: "ChatroomCtrl as chatroom",
                resolve: {
                    roomInfo: ["$stateParams", "Room", function ($stateParams,Room) {
                       return Room.getRooms($stateParams.id)
                    }]
                }
            });
    }

    angular
        .module('blocChat', ['ui.router', 'firebase', 'ngAnimate', 'ngTouch', 'ui.bootstrap'])
        .config(config);
})();