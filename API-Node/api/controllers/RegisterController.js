//Importando Módulos
const bcrypt = require("bcrypt")
const User = require("../models/UserModel")
const jwt = require('jsonwebtoken')
const EnvConfig = require ('../../config/vars/env')

//Função de login
function  register (req,res){
    const {nome, telefone, senha} = req.body
    User.findOne({telefone}).then(user =>{
        if(user){
            res.statusCode = 404
            res.send({mess:"Número de telefone já cadastrado!"})    
        }else{
            bcrypt.genSalt(10, (err,salt)=>{
                bcrypt.hash(senha, salt, (err, hash)=>{
                    User.create({nome, telefone, senha:hash}).then(user=>{
                        res.statusCode = 201
                        res.send({mess:"Usuário cadastrado com sucesso!"}) 
                    }).catch(err=>{
                        res.statusCode = 401
                        res.send({mess:"Erro interno!", err})     
                    })
                })
            })
        }
    })
}

//Exportando Módulo
module.exports = register