const express = require('express');
const router = require('./src/routes/api');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');


// Security middleware import
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const hpp = require('hpp');
const xss = require('xss-clean');


// Security middleware implement
app.use(helmet());
app.use(cors());
app.use(hpp());
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

// Request rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minute
    max: 100 // max limit per windowMs
});
app.use(limiter);

// DB connection
const URI = process.env.DATABASE;
const OPTION = {user:'', pass:'', autoIndex:true};
mongoose.connect(URI, OPTION, (err)=>{
    console.log('DB connected');
    console.log(err);
});

// Routing version control
app.use("/api/v1", router);


// undefine route
app.use("*", (req, res)=>{
    res.status(404).json({
        status: "Failed",
        data: "Page not found"
    });
});

module.exports = app;