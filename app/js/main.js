angular.module('starterapp', ['templates', 'ui.router'])
	.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeController',
				templateUrl: '/templates/home/home.html',
				title: 'Home'
			})
			.state('about', {
				url: '/about',
				controller: 'AboutController',
				templateUrl: '/templates/about/about.html',
				title: 'About'
			});

		$urlRouterProvider.otherwise('/');
	})
	.run(function ($rootScope)
	{
		$rootScope.$on('$stateChangeSuccess', function(event, toState) {
			$rootScope.pageTitle = toState.title || '';
		});
	});