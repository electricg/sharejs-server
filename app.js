#!/usr/bin/env node

var connect = require('connect'),
    sharejs = require('share').server;

var server = connect(
      connect.logger(),
      connect.static(__dirname + '/public')
    );

var options = {
	db: {type: 'none'},
	browserChannel: {cors: '*'}
};

sharejs.attach(server, options);

var port = process.env.PORT || 5000;
server.listen(port);
console.log('Server running at port '+port);