const express = require('express');
const {
    getAllrendez,
    getSinglerendez,
    createRendez,
    deleteRendez,
    updateRendez
  }=require('../controllers/rendez_controllers')


const router =express.Router()

//get all endez vous
router.get('/',getAllrendez)

//get single rendez vous
router.get('/:id',getSinglerendez)

//post a new rendez vous
router.post('/',createRendez )

//delete a rendez vous
router.delete('/:id',deleteRendez)


//update a rendez vous
router.patch('/:id',updateRendez)


module.exports=router