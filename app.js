'use strict'

var express=require('express');
var bodyParser=require('body-parser');

var app=express();
var api=require('./rutas/artesania');
var cabecera=require('./middleware/cabecera');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cabecera);
app.use('/sañu',api)

module.exports= app;