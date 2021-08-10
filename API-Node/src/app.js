//Importar Módulos
const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')
const cors       = require('cors')

//Config body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Config cors
app.use(cors());

//Importar Rotas
const index   =   require('../routes/Index')
const user    =   require('../routes/User')
const Message =   require('../routes/Message')

//Usar Rotas
app.use('/', index)
app.use('/', user)
app.use('/', Message)

//Importando Banco
require("../config/database")

module.exports = app