angular.module('starterapp').factory('SocketService', function (socketFactory) {
	var ioSocket = io.connect('http://localhost:4000/');

	socket = socketFactory({
		ioSocket: ioSocket
	});

	socket.forward('demo');

	return socket;
});