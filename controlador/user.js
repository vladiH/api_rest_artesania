'use strict'
var User=require('../modelos/user');
var passwordHash = require ('password-hash');

function createUser(req,res,next){
    var user=new User();
    var params=req.body;
    user.nombre.first=params.nombre.first;
    user.nombre.last=params.nombre.last;
   
    user.userName=params.userName;
    user.password=passwordHash.generate(params.password);
    user.email=params.email;
    user.tipo=params.tipo;
    user.password_confirmation=verificarHash(user.password,params.password_confirmation);

     console.log(user.password_confirmation+"-"+user.password);
    user.save((err,userGuardado)=>{
    	if(err)
    	{
    		 return res.status(500).send({mensaje:err});
    	}else{
    		 return res.status(200).send({user:userGuardado});
    	}
    });
    
};

function verificarHash(pass,c_pass)
{
    if(passwordHash.verify (c_pass, pass)){
        return pass;
    }else{
        return c_pass;
    }
}
module.exports={
    createUser
}