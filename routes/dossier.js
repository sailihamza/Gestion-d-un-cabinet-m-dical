const express = require('express');
const {
    createDossier,
    getAllDossier,
    getSingleDossier,
    deleteDossier,
    updateDossier,
}=require('../controllers/dossier_controllers')
const router =express.Router()


//get all endez vous
router.get('/',getAllDossier)

//get single rendez vous
router.get('/:id',getSingleDossier)

//post a new rendez vous
router.post('/',createDossier)

//delete a rendez vous
router.delete('/:id',deleteDossier)


//update a rendez vous
router.patch('/:id',updateDossier)


module.exports=router