#!/usr/bin/env node
var http = require('http');

var link = process.argv[2];
if (!link) {
	console.error('no link given');
	process.exit(1);
}

var port = 3000;

http.createServer(function (req, res) {
	console.log(`${req.method} ${req.url}`);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(`
		<html>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<style>body{margin:20px;} a{font-size:32px;}</style>
			</head>
			<body><a href="${link}">${link}</a></body>
		</html>`);
	res.end();
}).listen(port, function (err) {
	if (err) console.error(err);
	else console.log(`Running on port ${port} for ${link}`);
});

process.on('SIGTERM', function () {
	process.exit(0);
});

