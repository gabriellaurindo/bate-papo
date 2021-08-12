//Importando Módulos
const mongoose = require('mongoose')

//Definindo Schema
const Schema = mongoose.Schema

//Criando e configurando um novo Schema
const userSchema = new Schema({
    nome:{
       type: String,
       require:true
    },
    telefone:{
        type:String,
        require:true,
        unique:true
    },
    senha:{
        type:String,
        require:true,
        select: false
    },
    flag:{
        type: String,
        trim: true,
        uppercase: true,
        required: true,
        maxlength: 1,
        select:false,
        default:"A"
    }
})

//Definindo modelo de usuário baseado no Schema
const User = mongoose.model("User", userSchema)

//Exportando Módulo
module.exports = User


