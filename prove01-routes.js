const fs = require('fs');
const { restart } = require('nodemon');

const requestHandler = (req, res) => {
        const url = req.url;
        const method = req.method; 

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Greetings World!</title></head>'); 
        res.write('<body><h1>Greetings from the first prove assignment!</h1></body>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username" placeholder="Enter username here"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users of the Fake Variety</title></head>');
        res.write('<body>');
        res.write('<h1>Here are all the users (fake) for this site:</h1>');
        res.write('<ul>');
        res.write('<li>Billy Bob Joe III</li>');
        res.write('<li>Jason</li>');
        res.write('<li>Alvin</li>');
        res.write('<li>Slightly Judging Turtle</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
           const userName = parsedBody.split('=')[1];
            console.log(userName);
            res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();     
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first project</title></head>');
    res.write('<body><p>Hello from my test</p></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;
