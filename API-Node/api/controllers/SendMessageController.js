//Importando Models
const User = require("../models/UserModel")
const Message = require("../models/MessageModel")

//Função de login
function SendMessage (req,res){
    const {conteudo, sender, receiver} = req.body
    var dataAtual = new Date();
    Message.create({conteudo, sender, receiver}).catch(err =>{
        res.statusCode = 403
        res.send({Error:err})
    })
    res.statusCode = 201
    res.send({Mess:"Sucess"})
}

//Exportando Controller
module.exports = SendMessage