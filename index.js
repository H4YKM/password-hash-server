const http = require('http');
const fs = require('fs');
const hash = require('object-hash');
const config = require('config');

const PORT = config.get('PORT') || 3000;

http.createServer((req, res) => {

    if (req.method == 'GET') {
        const pageTxt = fs.readFileSync('./public/index.html', 'utf-8');
        res.setHeader('Content-type', 'text/html');
        res.end(pageTxt);

    } else {

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
            console.log(body); // Text print
        });
        req.on('end', () => {
            const hashedPass = hash.sha1(body);
            console.log(hashedPass); // Hash print
        })

    }

}).listen(PORT, () => {
    console.log(`server has been start in port ${PORT}`);
});