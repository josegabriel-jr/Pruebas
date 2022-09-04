const { Schema, model } = require('mongoose');

const MateriaSchema = Schema({
    nombre_materia: {
        type: String,
        required: [true, 'Nombre de materia obligatorio'],
        unique: true
    },
    semestre: {
        type: Number,
        required: [true, 'semestre obligatorio'],
    },
    carrera: {
        type: String,
        required: [true, 'Carrea obligatorio'],

    }, user_id: {
        type: Number, ref: 'usuario' 
    }

});


module.exports = model('materia', MateriaSchema); 