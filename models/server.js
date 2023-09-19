const express = require('express');
const cors = require('cors');

const { socketController } = require('../sockets/controller');




class Server {

    constructor () {
        this.app    = express();
        this.port   = process.env.PORT;

        this.server = require('http').createServer( this.app );
        this.io     = require('socket.io')( this.server );

        //SECCION 12 tip para las rutas 
        this.paths = {}


        //llamando el metodo de los Middlewares 
        this.middlewares();

        //llamando el metodo de las Rutas de mi aplicacion
        this.routes();

        //configuracion de sockets
        this.sockets();
    }


    //metodo de los middlewares
    middlewares() {

        //CORS
        this.app.use(cors());


        //directorio publico
        this.app.use(express.static('public'));

    }

    //creando metodos para las rutas
    routes() {

        //this.app.use( this.paths.usuarios,  require('../routes/usuarios') );
        
    }

    //metodo de los sockets
    sockets() {
        this.io.on('connection', socketController )
    }

    listen () {
        this.server.listen(this.port, () => {
            console.log(`Servidor corriendo desde el puerto ${this.port}`);
        });
    }


}

module.exports = Server;