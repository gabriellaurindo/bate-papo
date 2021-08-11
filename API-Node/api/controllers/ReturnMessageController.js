//Importando Models
const Message = require("../models/MessageModel")

//Função para retornar mensagens com base no sender e receiver
function ReturnMessage (req,res){
    const {sender, receiver} = req.body
        Message.find({$or:[{sender, receiver}, {sender:receiver, receiver:sender}]}).sort({date: 'desc'}).then(messages=>{
            res.statusCode = 201
            res.send({messages})
        })
}

//Exportando Controller
module.exports = ReturnMessage