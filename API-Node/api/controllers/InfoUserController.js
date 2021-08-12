//Importando Módulos
const User = require("../models/UserModel")


//Função de login
function  infoUser (req,res){
    res.send({mess:"Tu ta logado irmão!"})
}

//Exportando Módulo
module.exports = infoUser