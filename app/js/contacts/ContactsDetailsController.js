angular.module('starterapp').controller('ContactsDetailsController', function($scope, ContactsService, contact) {
	$scope.contact = contact;
});