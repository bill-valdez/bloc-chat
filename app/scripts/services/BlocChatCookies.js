(function () {
    function BlocChatCookies($cookies, $uibModal) {
        if (!$cookies.get('blocChatCurrentUser') || $cookies.get('blocChatCurrentUser') === '') {
            $uibModal.open({
                animation: false,
                templateUrl: '/templates/cookiesModal.html',
                controller: 'UserNameModalInstanceCtrl as username',
                size: 'sm'
            }).result.then(function (resultUserName) {
                $cookies.put('blocChatCurrentUser', resultUserName)
                
            });

        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();