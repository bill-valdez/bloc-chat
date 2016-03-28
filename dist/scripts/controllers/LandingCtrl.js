 (function() {
     function LandingCtrl() {
         this.heroTitle = "We want to hear whay you have to say!";
         this.list = [
         	{ 
         		name: 'Joe',
         		age: 32
         	},
         	{
         		name: 'Eva',
         		age: 24
         	},
         	{
         		name: 'Lin',
         		age: 70
         	}
         ];
     }
 
     angular
         .module('blocChat')
         .controller('LandingCtrl', LandingCtrl );
})();