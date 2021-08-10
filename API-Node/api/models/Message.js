//Importando Módulos
const mongoose = require('mongoose')

//Definindo Schema
const Schema = mongoose.Schema

//Criando e configurando um novo Schema
const messageSchema = new Schema({
    conteudo:{
       type: String,
       require:true
    },
    sender:{
        type:String,
        require:true,
    },
    receiver:{
        type: String,
        required: true,
    },
    date:{
        type:Date,
        required: true
    }
})

//Definindo modelo de usuário baseado no Schema
const Message = mongoose.model("Message", messageSchema)

//Exportando Módulo
module.exports = Message


