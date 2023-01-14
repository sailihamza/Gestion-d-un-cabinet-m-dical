const mongoose  = require('mongoose')
const Workout = require('../models/rendez_mod')



// get all rendez 
const getAllrendez = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
  
    res.status(200).json(workouts)
  }
  

// get a single rendez
const getSinglerendez = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no singl rendez'})
    }
  
    const workout = await Workout.findById(id)
  
    if (!workout) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }
  
  // create a new rendez
  const createRendez = async (req, res) => {
    const {name, surname, doctor,time,motif} = req.body
  
    // add to the database
    try {
      const workout = await Workout.create({ name, surname, time,doctor,motif })
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  


  // delete a rendez
const deleteRendez = async (req, res) => {
    const {id} =req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no delete'})
    }
    const workout =await Workout.findByIdAndDelete({_id:id})
    if (!workout) {
        return res.status(400).json({error: 'No delete'})
      }
      res.status(200).json(workout)
} 
  
  // update a workout
const updateRendez = async (req, res) => {
    const {id} =req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no update'})
    }
    const workout =await Workout.findByIdAndUpdate({_id:id},{
        ...req.body
    })
    if (!workout) {
        return res.status(400).json({error: 'No update'})
      }
      res.status(200).json(workout)
  }
  
  module.exports = {
    getAllrendez,
    getSinglerendez,
    createRendez,
    deleteRendez,
    updateRendez
  }


