//Importando Módulos
const express = require('express')
const router = express.Router()

//Controllers
const register = require('../api/controllers/RegisterController')
const login = require('../api/controllers/LoginController')
const infoUser = require('../api/controllers/InfoUserController')

//Middlewares
const auth = require('../api/middlewares/AuthMiddleware')

//Rota para trazer as informações do usuário
router.get('/user-info',  auth, (req, res,) =>{
    infoUser(req, res)
})

//Rota para registrar um usuário
router.post('/user-register',  (req, res,) =>{
    register(req,res)    
})

//Rota para logar com um usuário
router.post('/user-login',  (req, res,) =>{
    login(req,res)    
})
   
//Exportando Rota Raiz
module.exports = router