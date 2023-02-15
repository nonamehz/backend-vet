const mongoose = require('mongoose');


const dbConnect = async () => {

    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.DB_CNN);
        console.log('DB connected to', mongoose.connection.name);
    } catch (error) {
        console.log(error);
    }

}


module.exports = {
    dbConnect
}