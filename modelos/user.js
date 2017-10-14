'use strict'
var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var email_match=[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"email no valido"];
var tipo_user=['super','user'];
var userSchema=new Schema({
   nombre: {
          first: { type: String, required: true, trim: true},
          last: { type: String, required: true, trim: true}
    },
    userName:{
        type:String,
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
    tipo:{type:String, enum:{values:tipo_user,message:'opcion no valida'}, default:'user'}
})

userSchema.virtual("password_confirmation").get(function(){
    return this.p_c
}).set(function(password){
    this.p_c=password;
})

module.exports = mongoose.model('user', userSchema);