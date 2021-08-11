//Importando Módulos
const express = require('express')
const router = express.Router()

//Controllers
const SendMessage = require('../api/controllers/SendMessageController')
const ReturnMessage = require('../api/controllers/ReturnMessageController')

//Rota para enviar uma mensagem
router.post('/send-message', (req, res)=>{
    SendMessage(req,res);
})

//Rota para receber mensagens
router.get('/receive-messages', (req, res)=>{
    ReturnMessage(req,res);
})

//Exportando Rota Raiz
module.exports = router