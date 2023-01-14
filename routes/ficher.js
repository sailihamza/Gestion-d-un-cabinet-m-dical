const express = require('express');
const {
    createFicher,
    getAllFicher,
    getSingleFicher,
    deleteFicher,
    updateFicher,
}=require('../controllers/ficher_controllers')
const router =express.Router()


//get all endez vous
router.get('/',getAllFicher)

//get single rendez vous
router.get('/:id',getSingleFicher)

//post a new rendez vous
router.post('/',createFicher)

//delete a rendez vous
router.delete('/:id',deleteFicher)


//update a rendez vous
router.patch('/:id',updateFicher)


module.exports=router