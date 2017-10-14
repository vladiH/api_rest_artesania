'use strict'

var express=require('express');
var bodyParser=require('body-parser');

var app=express();
var api=require('./routes/libreria');
var cabeceras=require('./middleware/cabeceras');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cabeceras);
app.use('/api',api)

module.exports= app;