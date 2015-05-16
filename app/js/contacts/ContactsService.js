angular.module('starterapp').factory('ContactsService', function($http, $q, $log) {
	var factory = {};

	//var customers = $http.get('/contacts.json')
	var customers = $http.get('http://beta.json-generator.com/api/json/get/CYXj-kv?delay=500')
		.then(function(response) { 
			return response.data;
		});

	factory.findAll = function() {
		return customers;
	};

	factory.findById = function(id) {
		return customers.then(function(data) { 
			return _.find(data, {guid: id});
		});
	};

	return factory;
});