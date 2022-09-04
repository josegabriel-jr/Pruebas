const { response, request } = require('express');
const Materia = require('../models/materia');

const materiaGet = async(req = request, res = response) => {
    const materia = await Materia.find();
    res.json({
        materia
    });
}

const materiaDelete = async (req = request, res = response) => {
    const {id} = req.params;

    const materia = await Materia.findByIdAndDelete(id);

    res.json({
        materia
    });
}

const materiaPost = async (req = request, res = response) => {
    const { nombre_materia, semestre, carrera } = req.body;

    //validar Email unique

    const materia = new Materia({nombre_materia, semestre, carrera});
    //--------------------------------------------//
    materia.save();
    res.json({
        materia
    });
}

const materiaPut = async(req = request, res = response) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;
    const usuario = await Materia.findByIdAndUpdate(id, resto);

    res.json({
        sms: "materia Actualizado",
        usuario
    });
   
}

module.exports = {
    materiaGet,
    materiaDelete,
    materiaPost,
    materiaPut
};
