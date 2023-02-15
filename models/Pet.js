const { Schema, model } = require('mongoose');


const PetSchema = Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    birth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    adopted: {
        type: Boolean,
        default: false
    },
    state: {
        type: Boolean,
        default: true
    },
    veterinary: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});


module.exports = model('Pet', PetSchema);