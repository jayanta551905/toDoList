const express = require('express');
const router = require('../routes/api');
const app = new express();
require('dotenv').config();
const mongoose = require('mongoose');

// security middleware import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// security middleware implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

// request rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 600
});
app.use(limiter);

// DB connection
