
'use strict';
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const port = 8080;
const address = "127.0.0.1";

const apiRouter = require('./server/routes/api');
var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', apiRouter);

app.get('/', require('./server/controllers/index.js').controller);

app.listen(port, () =>{
    console.log(`Listen at ${address}:${port}`);
});

module.exports = app;
