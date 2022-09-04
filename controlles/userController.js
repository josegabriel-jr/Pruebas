const { response, request } = require('express');
const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');

const userGet = async (req = request, res = response) => {
    const { email } = req.body;
    const usuario = await Usuario.findOne({ email });

    let sexo = "";
    if (usuario.sexo == "hombre" || usuario.sexo == "masculino") {
        sexo = "Soy un Hombre";
    } else if (usuario.sexo == "mujer" || usuario.sexo == "femenino") {
        sexo = "Soy una Mujer";
    } else {
        sexo = "prefiere no decirlo";
    }

    const tmp = {
        _id: usuario._id,
        full_name: `${usuario.nombre} ${usuario.apellido}`,
        sexo: sexo,
        materias: usuario.materias,
        email: usuario.email,

    }

    res.json({
        tmp
    });
}

const userDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const usuario = await Usuario.findByIdAndDelete(id);

    res.json({
        usuario
    });
}

const userPost = async (req = request, res = response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            error
        })
    }


    const { nombre, apellido, email, sexo, materias } = req.body;

    //validar Email unique
    const existeEmail = await Usuario.findOne({ email });

    if (existeEmail) {
        return res.status(400).json({
            sms: "Correo ya existe",
            existeEmail
        });
    }


    const usuario = new Usuario({ nombre, apellido, email, sexo, materias });
    //--------------------------------------------//
    materias.forEach((info) => {
        Usuario.findOne({ info }).populate('materia').exec((err, usuario) => {
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(400).json({
                    error
                })
            }
        })
    });

    usuario.save();
    res.json({
        usuario
    });
}

const userPut = async (req = request, res = response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            error
        })
    }

    const { id } = req.params;
    const { _id, ...resto } = req.body;
    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        sms: "Usuario Actualizado",
        usuario
    });
}


module.exports = {
    userGet,
    userDelete,
    userPost,
    userPut
};
