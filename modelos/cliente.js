'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var clienteSchema = new Schema({
	razon_social:{type:String, maxlength:[50,'maximo 50 caracteres'], trim:true},
	nombre: {
	      first: { type: String, required: true, trim: true},
	      last: { type: String, required: true, trim: true}
    },
    direccion:{type:String, required:true, trim: true},
    ciudad:{type:String, required:true, trim: true},
	region:{type:String, required:true, trim: true},
	codigo_postal:{type:String,maxlength:[10,'maximo 10 caracteres'], require:true, trim:true},
	pais:{type:String, required:true, trim:true},
	celular:{type:String, min:[24,'celular no valido'], required: true,trim: true}
});
 
module.exports = mongoose.model('cliente', clienteSchema);