//Importando módulos
const mongoose = require("mongoose")

//Config banco mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/batepapo', {
    useNewUrlParser: true , 
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB Conectado...");
}).catch((err)=>{
    console.log("Houve um erro: " + err);
});