'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var transporteSchema = new Schema({
	razon_social:{type:String, required:true, trim: true},
	direccion:{type:String, required:true, trim: true},
	ciudad:{type:String, required:true, trim: true},
	region:{type:String, required:true, trim: true},
	celular:{type:String, min:[24,'celular no valido'], required:true, trim: true}
});
 
module.exports = mongoose.model('transporte', transporteSchema);