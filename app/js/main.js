angular.module('starterapp', ['templates', 'ui.router', 'ngAnimate', 'ngMessages', 'uuid'])
	.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('contacts', {
				url: '/',
				title: 'Contacts',

				views: {
					'': {
						templateUrl: '/templates/contacts/contacts.html'
					},
					'list@contacts': {
						controller: 'ContactsListController',
						templateUrl: '/templates/contacts/contacts.list.html'
					}
				}
			})
			.state('contacts.new', {
				url: 'contact/new',
				title: 'New Contact',

				views: {
					'content@contacts': {
						controller: 'ContactsNewController',
						templateUrl: '/templates/contacts/new/contacts.new.html'
					}
				}
			})
			.state('contacts.detail', {
				url: 'contact/{id:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}}',
				title: 'Contact Detail',

				resolve: {
					contact: function($stateParams, ContactsService) {
						return ContactsService.findById($stateParams.id).then(function(data) {
							return data;
						});
					}
				},

				views: {
					'content@contacts': {
						controller: 'ContactsDetailsController',
						templateUrl: '/templates/contacts/detail/contacts.detail.html'
					}
				}
			})
			.state('contacts.detail.edit', {
				url: '/edit',

				views: {
					'content@contacts': {
						controller: 'ContactsDetailsController',
						templateUrl: '/templates/contacts/detail/contacts.edit.html'
					}
				}
			})
			.state('about', {
				url: '/about',
				controller: 'AboutController',
				templateUrl: '/templates/about/about.html',
				title: 'About'
			});

		$urlRouterProvider.otherwise('/');
	})
	.run(function ($rootScope, $state, $stateParams)
	{
		$rootScope.$on('$stateChangeSuccess', function(event, toState) {
			$rootScope.pageTitle = toState.title || '';
		});

		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	});