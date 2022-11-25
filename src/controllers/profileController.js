const profileModel = require('../models/profileModel');
const jwt = require('jsonwebtoken');

exports.createProfile = (req, res)=>{
    let reqBody = req.body;
    profileModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({
                status: 'Fail to registration',
                data: err
            })
        }else{
            res.status(201).json({
                status: 'Welcome :) you successfully registered',
                data: data
            })
        }     
    })
}

exports.userLogin = (req, res)=>{
    let userName = req.body['userName'];
    let password = req.body['password'];
    profileModel.find({userName:userName,password:password}, (err, data)=>{
        if(err){
            res.status(400).json({status: 'Fail', data: err})
        }else{
            if(data.length>0){
                let payload = {
                    exp: Math.floor(Date.now()/1000) + (60*60),
                    data: data[0]
                }
                let token = jwt.sign(payload, 'secretKey123')
                res.status(200).json({status:'Success',token:token, data:data})
            }else{
                res.status(401).json({status:'Unauthorize'})
            }
        }
    })
}

exports.selectProfile = (req, res)=>{
    let userName = 'joy06'
    profileModel.find({userName:userName}, (err, data)=>{
        if(err){
            res.status(400).json({status:'Fail', data: err})
        }else{
            res.status(200).json({status:'Success',data:data})
        }
    })
}