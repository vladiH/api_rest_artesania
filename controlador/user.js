'use strict'
var passport=require("passport");
var User=require('../modelos/user');

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

    User.findOne({email:user.email},(err,existeUsuario)=>{
        if(existeUsuario)
        {
            return res.status(400).send({message:"Ya existe el e-mail"});
        }else{
            user.save((err)=>{
                if(err){
                    next(err);
                }else{
                    req.logIn(user,(err)=>{
                        if(err){
                            next(err);
                        }else{
                            res.status(200).send({message:"Usuario creado"});
                        }
                    })
                }
            })
        }
    })
    
};

function autentificacionUser(req,res,next){
    passport.authenticate('local',(err,usuario, info)=>{
        if(err){
            next(err);
        }else{
            if(!usuario){
                return res.status(400).send({message:"Email o contraseña no valida"});
            }else{
                req.logIn(usuario,(err)=>{
                    if(err){
                        next(err);
                    }else{
                        res.status(200).send({message:"Login exitoso"});
                    }
                })
            }
        }
    })(req, res, next);
}

function logoutUser(req, res){
    req.logout();
    res.status(200).send({message:"Logout exitoso"});
}
module.exports={
    createUser,
    autentificacionUser,
    logoutUser
}