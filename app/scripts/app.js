(function() {
     function config($stateProvider, $locationProvider) {
     	$locationProvider
     		.html5Mode({
	             enabled: true,
	             requireBase: false
	         });

         $stateProvider
         	.state('landing', {
	             url: '/',
	             templateUrl: '/templates/landing.html',
	             controller: 'LandingCtrl as landing'
	         });
     }
 
     angular
     	.module('blocChat', ['ui.router', 'firebase', require('ngAnimate'), require('angular-touch')])
     	.config(config);
 })();