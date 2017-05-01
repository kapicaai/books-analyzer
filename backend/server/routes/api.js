
const express = require('express');
const authorRouter = require('./api/author');
const bookRouter = require('./api/book');
const userRouter = require('./api/user');

const apiRouter = express.Router();

apiRouter.use('/user', userRouter)
    .use('/book', bookRouter)
    .use('/author', authorRouter);

module.exports = apiRouter;
