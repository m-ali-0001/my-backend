const { Environment } = require('./environment.js');
const express = require('express');
const server = express();

var cors = require('cors');
server.use(cors());

server.get('/', (request, response) => {
    response.send('I am backend API');
});
server.listen(Environment.port || 3000, () => {
    console.log(`Server UP!`)
});