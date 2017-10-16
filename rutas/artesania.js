'use strict'

var express=require('express');

var controladorUser=require('../controlador/user');
var api=express.Router();

api.post('/loguin', controladorUser.createUser);

module.exports=api;