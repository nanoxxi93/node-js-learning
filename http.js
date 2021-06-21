const http = require('http')

const requestListener = (req, res) => {
    // req and res are stream!
    // req:IncommingMessage, res:ServerResponse
    console.dir(req, { depth: 0});
    res.write('Hello Node\n');
    res.end();
};

const server = http.createServer();

server.on('request', requestListener);

server.listen(4242, () => {
    console.log('Server is running...')
});