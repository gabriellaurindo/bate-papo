//Importando Módulos
const User = require("../models/UserModel")
const Message = require("../models/MessageModel")

//Função de login
function SendMessage (req,res){
    const {conteudo, sender, receiver} = req.body
    var dataAtual = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    Message.create({conteudo, sender, receiver}).catch(err =>{
        console.log("Houve um erro: " + err)
        res.statusCode = 403
        res.send({Error:err})
    })
    console.log("Deu certo")
    res.statusCode = 201
    res.send({Mess:"Sucess"})
}

//Exportando Módulo
module.exports = SendMessage