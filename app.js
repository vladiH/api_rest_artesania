'use strict'

var express=require('express');
//sessiones en express
var session=require('express-session');
//
var mongoStore=require('connect-mongo')(session);
//libreia para parsear consultas http a json
var bodyParser=require('body-parser');
var passport=require('passport');
var app=express();
var api=require('./rutas/artesania');
var cabecera=require('./middleware/cabecera');
var mongo_url='mongodb://localhost:27017/sanu';
app.use(session({
	secret:'sañu',
	resave:true,
	saveUninitialized:true,
	store:new mongoStore({
		url:mongo_url,
		autoReconnect:true
	})
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cabecera);
app.use('/sanu',api)
module.exports= app;