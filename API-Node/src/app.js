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
const home   =   require('../routes/HomeRoute')
const user    =   require('../routes/UserRoute')
const message =   require('../routes/MessageRoute')

//Usar Rotas
app.use('/', home)
app.use('/', user)
app.use('/', message)

//Importando Banco
require("../config/database")

module.exports = app