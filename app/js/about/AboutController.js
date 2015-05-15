angular.module('starterapp').controller('AboutController', function($scope) {
	$scope.companyName = faker.company.companyName();
});