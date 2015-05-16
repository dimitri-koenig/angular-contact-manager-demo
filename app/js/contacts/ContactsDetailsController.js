angular.module('starterapp').controller('ContactsDetailsController', function($scope, ContactsService, contact, $state, $timeout) {
	var originalContact = contact;
	$scope.contact = angular.copy(originalContact);

	$scope.isSaving = false;
	$scope.savingText = 'Save';

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
		//SocketService.emit('demo:save');
		$scope.isSaving = true;

		ContactsService.update(originalContact, $scope.contact);
		$state.go('contacts.detail', {id: contact.guid});
	};

/*
	SocketService.on('demo:save-progress', function (data) {
		$scope.savingText = data.message;

		if (data.finished) {
			$timeout(function() {
				ContactsService.update(originalContact, $scope.contact);
				$state.go('contacts.detail', {id: contact.guid});
			}, 1500);
		}
	});
*/
});