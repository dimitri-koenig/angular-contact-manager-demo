angular.module('starterapp').controller('ContactsListController', function($scope, ContactsService) {
	$scope.contacts = [];

	ContactsService.findAll().then(function(data) {
		$scope.contacts = data;
	});
});