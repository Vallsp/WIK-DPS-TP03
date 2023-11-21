import http from 'http';
import * as os from 'os';

const hostname = '0.0.0.0';
const defaultPort = 3000;
const port = process.env.PING_LISTEN_PORT ? parseInt(process.env.PING_LISTEN_PORT, 10) : defaultPort;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/ping') {
    const headers = req.headers;
    const host = os.hostname();
    console.log({host});
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ headers}));
  } else {
    res.statusCode = 404;
    res.end('');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});
