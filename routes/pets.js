const { Router } = require('express');

const { validarJWT } = require('../middlewares');
const { allPets, petById, addPet, editPet, deletePet } = require('../controllers/pets');


const router = Router();

router.get('/', allPets);
router.get('/:id', petById);
router.post('/', validarJWT, addPet);
router.put('/:id', validarJWT, editPet);
router.delete('/:id', validarJWT, deletePet);


module.exports = router;