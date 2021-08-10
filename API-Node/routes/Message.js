//Importando Módulos
const express = require('express')
const router = express.Router()
const SendMessage = require('../api/controllers/SendMessageController')

//Rota Raiz
router.post('/Send-message', (req, res)=>{
    SendMessage(req,res);
})
   
//Exportando Rota Raiz
module.exports = router