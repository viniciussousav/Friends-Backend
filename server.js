const express = require('express');
const routes = require('./routes');
const moongose = require('mongoose');

moongose.connect('mongodb+srv://vilela:vilela@cluster0-fysn2.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(routes);

app.listen(3000);
