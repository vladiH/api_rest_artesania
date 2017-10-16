'use strict'

var mongoose=require('mongoose');
var app=require('./app');
var port=process.env.PORT || 1800;



mongoose.connect('mongodb://localhost:27017/sanu',(err,res)=>{
	if(err){
		throw err;
	}else{
		console.log('conexion a mongo realizada');
		app.listen(port,()=>{
		console.log("rest_api corriendo en el puerto"+"-"+port)
});
	}
});
