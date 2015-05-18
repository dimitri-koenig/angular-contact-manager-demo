angular.module('starterapp').controller('ContactsNewController', function($scope, ContactsService, $state) {
	$scope.contact = {};

	$scope.cancel = function() {
		$state.go('contacts');
	};

	$scope.create = function() {
		var newContact = ContactsService.create($scope.contact);
		$state.go('contacts.detail', {id: newContact.guid});
	};
});