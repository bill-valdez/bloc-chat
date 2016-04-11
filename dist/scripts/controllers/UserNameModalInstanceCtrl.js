(function () {

    function UserNameModalInstanceCtrl($uibModalInstance) {

        this.ok = function () {
            if (this.username && this.username !== '') {
                $uibModalInstance.close(this.username);
            }

        };

    }

    angular
        .module('blocChat')
        .controller('UserNameModalInstanceCtrl', ['$uibModalInstance', UserNameModalInstanceCtrl])

})();