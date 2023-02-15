const { Schema, model } = require('mongoose');


const RequestSchema = Schema({
    reason: {               //?¿Por qué desea adoptar una mascota?
        type: String,
        required: true,
    },
    responsible: {          //?¿Quien será el responsable de la mascota?
        type: String,
        required: true,
    },
    livingPlace: {          //?¿Tiene una vivienda propia?
        type: String,
        required: true,
    },
    haveTimeToCare: {       //?¿Dispone de tiempo para invertir en la mascota?
        type: String,
        required: true,
    },
    firstTime: {            //?¿Es la primera vez que ha adoptado en su vida?
        type: String,
        required: true,
    },
    hasOtherPets: {         //?¿Usted tiene otras mascotas?
        type: String,
        required: true,
    },
    acepted: {
        type: Boolean,
        required: true,
        default: false,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    pet: {
        type: Schema.Types.ObjectId,
        ref: 'Pet',
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    veterinary: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    }
});


module.exports = model('Request', RequestSchema);