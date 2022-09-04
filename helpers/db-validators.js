const Materia = require('../models/materia');
const Usuario = require('../models/usuario');


const emailExiste = async (correo = '') => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya está registrado`);
    }
}

const existeUsuarioPorId = async (id) => {

    // Verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe ${id}`);
    }

}

const existeMateriaPorId = async (id) => {
    //verificar si existen Materia
    const existeMateria = await Materia.findById(id);
    if (!existeMateria) {
        throw new Error(`El id no existe ${id}`);
    }
}



module.exports = {
    emailExiste,
    existeUsuarioPorId,
    existeMateriaPorId
}

