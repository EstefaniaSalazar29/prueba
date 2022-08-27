const express = require('express');
const morgan = require('morgan');
const router = require('./src/routes/index.routes');
require('dotenv').config();
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//route
app.use(require('./src/routes/index.routes'))

app.get('', (req, res)=>{
    res.send('Bienvenidos a la API')
})


app.set("port", process.env.PORT || 5003);
app.listen(app.get("port"), ()=> {
    console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
})

module.exports = app;