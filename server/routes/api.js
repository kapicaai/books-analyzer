'use strict';
const express = require('express');
const apiRouter = express.Router();
const authorRouter = require('./api/author');
const bookRouter = require('./api/book');
const userRouter = require('./api/user');

apiRouter.use('/user', userRouter)
    .use('/book', bookRouter)
    .use('/author', authorRouter);

module.exports = apiRouter;