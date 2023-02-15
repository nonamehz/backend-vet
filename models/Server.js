const express = require('express');
const cors = require('cors');
const { dbConnect } = require('../database/config');
const fileUpload = require('express-fileupload');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            auth: '/api/auth',
            users: '/api/users',
            pets: '/api/pets',
            requests: '/api/requests',
            uploads: '/api/uploads',
        }
        this.conectDB();
        this.middlewares();
        this.routes();
    }

    async conectDB() {
        await dbConnect();
    }

    middlewares() {
        //cors
        this.app.use(cors());
        //body parser
        this.app.use(express.json());
        //dir public
        this.app.use(express.static('public'));
        //fileupload
        this.app.use(fileUpload({
            limits: { fileSize: 50 * 1024 * 1024 },
            createParentPath: true,
            useTempFiles: true,
            tempFileDir: '/tmp/',
        }));
    }

    routes() {
        this.app.use(this.path.auth, require('../routes/auth'));
        this.app.use(this.path.pets, require('../routes/pets'));
        this.app.use(this.path.requests, require('../routes/requests'));
        this.app.use(this.path.uploads, require('../routes/uploads'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on PORT ${this.port}`);
        });
    }

}


module.exports = Server;