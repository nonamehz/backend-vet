

const auth = require('./auth');
const pets = require('./pets');
const requests = require('./requests');


module.exports = {
    ...auth,
    ...pets,
    ...requests
}