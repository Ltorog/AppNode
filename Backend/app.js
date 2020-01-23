const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
        'Authorization, X-API-KEY, Origin, x-Requested-With, Content-Type, Accept, Access-Controll-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Rutas
require('./server/routes/usuarios')(app);


app.get("*", (req,res) => {
    res.status(200).send({mensaje:"Bienvenido al servidor NodeJS"})
});


module.exports = app;