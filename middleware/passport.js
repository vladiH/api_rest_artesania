'use strict'
var passport=require('passport');
var estrategiaLocal=require('passport-local').Strategy;
var Usuario=require('../modelos/user');

passport.serializeUser((usuario,done)=>{
	done(null,usuario._id);
})

passport.deserializeUser((id,done)=>{
	Usuario.findById(id,(err,usuario)=>{
		done(err, usuario);
	})
})

passport.use(new estrategiaLocal(
	{usernameField:'email'},
	(email,password,done)=>{
		Usuario.findOne({email},(err,usuario)=>{
			if(!usuario){
				return done(null,false, {message:"El email no existe"});
			}else{
				usuario.compararPassword(password,(err,sonIguales)=>{
					if(sonIguales){
						return done(null, usuario);
					}else{
						//error, respuesta, mensaje
						return done(null, false, {message:"La contraseña no es valida"});
					}
				})
			}
		})
	}
	)
)

exports.estaAutentificado=(req,res,next)=>{
	if(req.isAuthenticated()){
		return next();
	}else{
		//error 401, sin autorizacion
		res.status(401).send({message:"No esta registrado"});
	}
}