import http from 'http';
import date from './date.js';
import getURL from './getUrl.js';
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.write(date()+"<br>")
    res.write(getURL.getpath(req)+"<br>")
    res.write(getURL.getParamsURL(req)+"<br>")
    res.end('Hello, chúc bạn thành công với nodejs\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});