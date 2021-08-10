//Importando Módulos
const User = require("../models/User")
const Message = require("../models/Message")

//Função de login
function SendMessage (req,res){
    const {conteudo, sender, receiver} = req.body
    const dataAtual = new Date()
    //User.findOne({telefone}).then(remitter =>{
        //User.findOne({telefone:receiver}).then(taker=>{
            Message.create({conteudo, sender, receiver, date:dataAtual}).catch(err =>{
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