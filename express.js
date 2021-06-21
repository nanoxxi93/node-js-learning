// npm i -g nodemon
// npm i express
// npm i pug || npm i handlebars || npm i ejs

const express = require('express')

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index');
});

server.get('/about', (req, res) => {
    res.render('about');
});

server.listen(4242, () => {
    console.log('Express Server is running...')
});