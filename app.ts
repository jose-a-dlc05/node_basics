// import core module
import * as http from 'http';

const server: http.Server = http.createServer(
	(req: http.IncomingMessage, res: http.OutgoingMessage): void => {
		console.log(req.url, req.method, req.headers);
		//process.exit();
		res.setHeader('Content-Type', 'text-html');
		res.write('<html>');
		res.write('<head><title>My First Page</title></head>');
		res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
		res.write('</html>');
		res.end();
	}
);

server.listen(3000, () => {
	console.log(`Listening on port 3000`);
});
