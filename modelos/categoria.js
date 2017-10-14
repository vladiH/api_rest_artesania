'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var categoriaSchema = new Schema({
	nombre:{type:String, required:true, trim:true},
	descripcion:{type:String, trim:true}
});
 
module.exports = mongoose.model('categoria', categoriaSchema);