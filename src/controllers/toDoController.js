const todoListModel = require('../models/todoListModel');
const todoModel = require('../models/todoListModel');

exports.createTodo = (req, res)=>{
    let reqBody = req.body;
    let todoSubject = reqBody['todoSubject'];
    let todoDescription = reqBody['todoDescription'];
    let userName = req.headers['userName'];
    let todoStatus = 'New';
    let todoCreateDate = Date.now();
    let todoUpdateDate = Date.now()

    let postBody = {
        userName:userName,
        todoSubject:todoSubject,
        todoDescription:todoDescription,
        todoStatus:todoStatus,
        todoCreateDate:todoCreateDate,
        todoUpdateDate:todoUpdateDate
    }

    todoModel.create(postBody, (err, data)=>{
        if(err){
            res.status(400).json({
                status: 'Fail to registration',
                data: err
            })
        }else{
            res.status(201).json({
                status: 'Welcome 🙂 you successfully registered',
                data: data
            })
        }     
    })
}

exports.selectTodo = (req, res)=>{
    let userName = req.headers['userName']
    todoModel.find({userName:userName}, (err, data)=>{
        if(err){
            res.status(400).json({status:'Fail', data: err})
        }else{
            res.status(200).json({status:'Success',data:data})
        }
    })
}


exports.updateTodo = (req, res)=>{
  let todoSubject = req.body['todoSubject']
  let todoDescription = req.body['todoDescription']
  let _id = req.body['_id']
  let todoUpdateDate = Date.now()

  let postBody = {
    todoSubject:todoSubject,
    todoDescription:todoDescription,
    todoUpdateDate:todoUpdateDate
  }

  todoListModel.updateOne({_id:_id}, {$set:postBody}, {upsert:true}, (err, data)=>{
    if(err){
        res.status(400).json({status:'Fail', data: err})
    }else{
        res.status(200).json({status:'Success',data:data})
    }
  })
}