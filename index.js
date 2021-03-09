const http = require('http');
const fs = require('fs');
const hash = require('object-hash');

const PORT = 3000;

http.createServer((req, res) => {

    if (req.method == 'GET') {
        const pageTxt = fs.readFileSync('./public/index.html', 'utf-8');
        res.setHeader('Content-type', 'text/html');
        res.end(pageTxt);

    }

}).listen(PORT, () => {
    console.log(`server has been start in port ${PORT}`);
});