angular.module('starterapp').factory('ContactsService', function($http, rfc4122) {
	var factory = {};

	//var customers = $http.get('/contacts.json')
	var customers = $http.get('http://beta.json-generator.com/api/json/get/CYXj-kv?delay=5')
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

	factory.delete = function(customer) {
		customers.then(function(data) { 
			data.splice(data.indexOf(customer), 1);
		});
	};

	factory.update = function(destinationContact, modifiedData) {
		angular.extend(destinationContact, modifiedData);
	};

	factory.create = function(newContactData) {
		newContactData.guid = rfc4122.v4();
		newContactData.picture = 'http://lorempixel.com/150/150/?' + Math.random();

		customers.then(function(data) { 
			data.push(newContactData);
		});

		return newContactData;
	};

	return factory;
});