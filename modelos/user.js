'use strict'
var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var email_match=[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"email no valido"];
var tipo_user=['super','user'];
var userSchema=new Schema({
   nombre: {
          first: { type: String, required: "Es necesario un nombre", trim: true},
          last: { type: String, required: "Es necesario el apellido", trim: true}
    },
    userName:{
        type:String,
        minlength:[1,'User name muy corto'],
        unique:true,
        require:"Es necesario un username",
    },
    password:{
        type:String,
        require:"Es necesario un password",
        validate:{
            validator:function(pass){
                    if( this.password_confirmation!=undefined)
                        return this.password_confirmation==pass;
                    else{
                        return true;
                    }
            },
            message:"Las contraseñas son diferentes"
        }
    },
    email:{
    type:String,
    require:"Es necesario un email",
    match:email_match
    },
    tipo:{type:String, enum:{values:tipo_user,message:'Tipo no valido'}, default:'user'}
})

userSchema.virtual("password_confirmation").get(function(){
    return this.p_c
}).set(function(password){
    this.p_c=password;
})

module.exports = mongoose.model('user', userSchema);