const { Schema, model, SchemaType } = require('mongoose');
const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'Apellido obligatorio'],
    },
    email: {
        type: String,
        required: [true, 'Email obligatorio'],
        unique: true,
        sparse:true
    },
    sexo: {
        type: String
    },
    materias: [{ type: Schema.Types.ObjectId, ref: 'materia' }]

});


module.exports = model('usuario', UsuarioSchema); 