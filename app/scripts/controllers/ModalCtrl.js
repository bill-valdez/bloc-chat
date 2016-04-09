(function () {
     function ModalCtrl($uibModal, Room) {
          
          this.animationsEnabled = true;

          this.open = function (size) {

            var modalInstance = $uibModal.open({
              animation: this.animationsEnabled,
              templateUrl: '/templates/modal.html',
              controller: 'ModalInstanceCtrl as modalInst',
              size: size,
              resolve: {
                newRoom: function(){
                    this.newRoom
                }
              }
            });

            modalInstance.result.then(function (newRoom) {
             Room.addRoom(newRoom);
                console.log("Success");
            }, function () {
              console.log('Modal dismissed at: ' + new Date());
            });
          };

          this.toggleAnimation = function () {
            this.animationsEnabled = !this.animationsEnabled;
          };

     }

     function ModalInstanceCtrl($uibModalInstance) {
       
          this.ok = function () {
            $uibModalInstance.close(this.chatName);
          };

          this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };

     }

     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
         .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();