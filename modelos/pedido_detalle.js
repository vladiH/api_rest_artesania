'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var pedido_detalleSchema = new Schema({
	precio_unitario_soles:{type:Number, required:'campo precio obligatorio',min:[0,'precio no valido'], trim: true},
	precio_unitario_dolares:{type:Number, required:'campo precio obligatorio',min:[0,'precio no valido'], trim: true},
	cantidad:{type:Numer, required:true, min:[0,'cantidad no valida'], trim:true},
	descuento:{type:Number, default:0},
	producto:[{ type: Schema.ObjectId, ref: "producto"}],
	pedido:[{type: Schema.ObjectId, ref: "pedido"}]
});
 
module.exports = mongoose.model('pedido_detalle', pedido_detalleSchema);