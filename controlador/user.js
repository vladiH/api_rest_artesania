'use strict'
var User=require('../modelos/user');
var bcrypt = require('bcrypt');
var BCRYPT_SALT_ROUNDS = 12;

function createUser(req,res,next){
    var user=new User();
    var params=req.body;
    user.nombre.first=params.nombre.first;
    user.nombre.last=params.nombre.last;
    user.userName=params.userName;
    user.password=params.password;
    user.email=params.email;
    user.tipo=params.tipo;
    user.password_confirmation=params.password_confirmation;
    bcrypt.hash(user.password, BCRYPT_SALT_ROUNDS)
    .then(function(hashedPassword){
    	user.password=hashedPassword
    })
    user.save((err,userGuardado)=>{
    	if(err)
    	{
    		return res.status(500).send({mensaje:err});
    	}else{
    		return res.status(200).send({user:userGuardado});
    	}
    });
    
};

function hashPassword(password:String)
{
	bcrypt . hash (password ,  BCRYPT_SALT_ROUNDS ,  función ( err , hash )  {
		if(err){
			return err;
		}else{
			return hash;
		}
	} );
}
function hashPasswordConfirmation()
{
	bcrypt . hash (password ,  BCRYPT_SALT_ROUNDS ,  función ( err , hash )  {
		if(err){
			return err;
		}else{
			return hash;
		}
	} );
}
module.exports={
    createUser
}