'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var pedidoSchema = new Schema({
	fecha_pedido:{type:Date, default: Date.now},
	fecha_requerida:{type:Date, default: null},
	fecha_envio:{type:Date, default: null},
	
	trasporte:{ type: Schema.ObjectId, ref: "trasporte"},
	cliente:{type: Schema.ObjectId, ref: "cliente"}
});
 
module.exports = mongoose.model('pedido', pedidoSchema);