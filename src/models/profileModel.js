const mongoose = require('mongoose');
const validator = require('validator');

const profileSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide your first name'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Please provide your last name'],
        trim: true
    },
    email: {
        type: String,
        validator: [validator.isEmail, 'Please provide a valid email'],
        required: [true, 'Email address is required'],
        unique: true,
        lowercase: true
    },
    mobileNumber: {
        type: String,
        validator: [validator.isMobilePhone, 'Please provide a valid mobile number'],
    },
    city: {
        type: String
    },
    userName: {
        type: String,
        required: [true, 'User name is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Password didn't match!"
        }
    }

},{versionKey:false});


module.exports = mongoose.model('profiles', profileSchema);