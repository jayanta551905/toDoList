const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    let token = req.headers['token-key']
    jwt.verify(token, 'secretKey123', (err, decoded)=>{
        if(err){
            res.status(400).json({status:'Unauthorized'})
        }else{

            let userName = decoded['data']['userName']
            req.headers.userName = userName;
            next()
        }
    })
}