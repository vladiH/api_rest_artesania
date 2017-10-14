'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var productoSchema = new Schema({
	nombre:{type:String, required:'campo nombre obligatorio', trim: true},
	precio_unitario_soles:{type:Number, required:'campo precio obligatorio',min:[0,'precio no valido'], trim: true},
	precio_unitario_dolares:{type:Number, required:'campo precio obligatorio',min:[0,'precio no valido'], trim: true},
	stock:{type:Number, required:true, min:[0,'stock no valido'],max:[100,'stock no valido'], trim: true},
	activo:{type:Boolean, default:false},
	descripcion:{type:String, trim: true},
	imagen:Array,
	proveedor:[{ type: Schema.ObjectId, ref: "proveedor"}],
	categoria:[{type: Schema.ObjectId, ref: "categoria"}]
});
 
module.exports = mongoose.model('producto', productoSchema);