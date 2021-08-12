//Importando Módulos
const bcrypt = require("bcrypt")
const User = require("../models/UserModel")
const jwt = require('jsonwebtoken')
const EnvConfig = require ('../../config/vars/env')

//Função de login
function  login (req,res){
    const {telefone, senha} = req.body
    User.findOne({telefone}).select('+senha').then(user =>{
        if(user){
            bcrypt.compare(senha, user.senha, (err, success)=>{
                if(success){
                    const token = jwt.sign({id : user.id}, EnvConfig.secret, {
                        expiresIn : 86400
                    })
                    user.senha=undefined
                    res.statusCode = 200
                    res.send({Acesso:"Autorizado", user, token})
                }else{
                    res.statusCode = 401
                    res.send({Acesso:"Negado"})
                }
            })    
        }else{
            res.statusCode = 404
            res.send({mess:"Usuário não encontrado!"})       
        }
        
    }).catch(function(motivo){
        console.clear
        console.log(motivo)
     })
}

//Exportando Módulo
module.exports = login