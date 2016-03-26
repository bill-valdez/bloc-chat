angular.module('blocChat', []);

 $stateProvider .state('landing', { url: '/', controller: 'LandingCtrl as landing',
         templateUrl: '/templates/landing.html'
     });