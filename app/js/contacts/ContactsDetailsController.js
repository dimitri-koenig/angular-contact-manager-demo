angular.module('starterapp').controller('ContactsDetailsController', function($scope, ContactsService, contact, $state) {
	var originalContact = contact;
	$scope.contact = angular.copy(originalContact);

	$scope.edit = function() {
		$state.go('contacts.detail.edit', {id: contact.guid});
	};

	$scope.new = function() {
		$state.go('contacts.new');
	};

	$scope.delete = function() {
		if (confirm('Are you sure?')) {
			ContactsService.delete(originalContact);
			$state.go('contacts');
		}
	};

	$scope.cancel = function() {
		$state.go('contacts.detail', {id: contact.guid});
	};

	$scope.save = function() {
		ContactsService.update(originalContact, $scope.contact);
		$state.go('contacts.detail', {id: contact.guid});
	};
});