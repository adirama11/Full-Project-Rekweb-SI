require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mediaRouter = require('./routes/media');
const coursesRouter = require('./routes/courses');
const orderRouter = require('./routes/orders');
const paymentRouter = require('./routes/payments');
// const axiosAdapter    = require('./routes/axios');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/media', mediaRouter);
app.use('/course', coursesRouter);
app.use('/order', orderRouter);
app.use('/payment', paymentRouter);
// app.use('/axios', axiosAdapter);

module.exports = app;
