require('dotenv').config();

const {dbConnection} = require('../database/config')
const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //Rutas de User 
        this.routePathUser = '/api/user', require('../routes/usuario');
        //Rutas de Materia
        this.routePathMateria = '/api/materia', require('../routes/materia');

        //middlewuares
        this.middlewuares();

        //Conexion base de datos
        this.conectarDB();

        //Rutas de mi aplicacion
        this.routes();
    }

    //conexion de base de datos
    async conectarDB(){
        await dbConnection();
    }

    middlewuares() {
        //cors 
        this.app.use(cors());

        //Parse y lectura de body
        this.app.use(express.json())
        
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use( this.routePathUser, require('../routes/usuario'));
        this.app.use( this.routePathMateria, require('../routes/materia'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`corriendo en el perto ${this.port}`);
        });
    }


}

module.exports = Server;