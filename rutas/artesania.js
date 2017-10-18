'use strict'

var express=require('express');
var passportConfig=require("../middleware/passport");
var controladorUser=require('../controlador/user');
var api=express.Router();

api.post('/signup', controladorUser.createUser);
api.post('/login', controladorUser.autentificacionUser);
api.get('/logout',passportConfig.estaAutentificado,controladorUser.logoutUser);

module.exports=api;