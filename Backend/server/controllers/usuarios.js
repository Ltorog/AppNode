const usuarios = require('../models/usuarios').usuarios;

function create(req, res){
    
    console.log(req.body);

    if(req.body == undefined)
    {    
        res.status(500).send({message: 'Error al enviar body'});
    }
    else
    {
    usuarios.create(req.body)
    .then(usuario => {
        res.status(200).send({usuario});
    })
    .catch(err => {
        res.status(500).send({err});
    });
    }
}

module.exports = {
    create
}