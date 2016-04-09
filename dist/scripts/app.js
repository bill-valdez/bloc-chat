(function() {
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
	            
	         });
     }
 
     angular
     	.module('blocChat', ['ui.router', 'firebase', 'ngAnimate', 'ngTouch', 'ui.bootstrap'])
     	.config(config);
 })();