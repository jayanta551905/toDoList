const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    userName:{type:String},
    todoSubject:{type:String},
    todoDescription:{type:String},
    todoStatus:{type:String},
    todoCreateDate:{type:Date},
    todoUpdateDate:{type:Date}

}, {versionKey:false});

module.exports = mongoose.model('todolists', todoSchema);