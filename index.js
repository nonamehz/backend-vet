require('dotenv').config();
const app = require('./app');
const db = require('./database/connection');


const main = async () => {

    try {

        //db connection
        await db.authenticate();
        console.log('DB connected to', db.getDatabaseName());

        //iniciar sv
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.log(error);
    }

}

main();