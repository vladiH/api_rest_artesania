'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var proveedorSchema = new Schema({
	razon_social:{type:String, trim: true},
	nombre: {
	      first: { type: String, required: true, trim: true},
	      last: { type: String, required: true, trim: true}
    },
	direccion:{type:String, trim: true},
	ciudad:{type:String, trim: true},
	region:{type:String, trim: true},
	celular:{type:String, min:[24,'celular no valido'], trim: true}
});
 
module.exports = mongoose.model('proveedor', proveedorSchema);