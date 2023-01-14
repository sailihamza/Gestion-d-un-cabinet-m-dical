const mongoose  = require('mongoose')
const Patient = require('../models/ficher_mod');

const getAllFicher = async (req, res) => {
    Patient.find((error, patients) => {
        if (error) {
          return res.status(400).json({
            error: error
          });
        }
        if (!patients) {
          return res.status(404).json({
            message: 'Aucun patient trouvé'
          });
        }
        res.status(200).json({
          patients: patients
        });
      });
}
// get a single dossier
const getSingleFicher = async (req, res) => {
    const  { id }= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no single '})
    }
    Patient.findById(id, (error, patient) => {
        if (error) {
          return res.status(400).json({
            error: error
          });
        }
        if (!patient) {
          return res.status(404).json({
            message: 'Patient non trouvé'
          });
        }
        res.status(200).json({
          patient: patient
        });
      });
}



const createFicher =async(req,res)=>{
    const patientData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        maidenName: req.body.maidenName,
        dob: req.body.dob,
        gender: req.body.gender,
        phone: req.body.phone,
        address: req.body.address,
        mobile: req.body.mobile,
        profession: req.body.profession
      };
    
      const patient = new Patient(patientData);
    
      patient.save((error) => {
        if (error) {
          return res.status(400).json({
            error: error
          });
        }
        res.status(201).json({
          message: 'Patient créé avec succès'
        });
      });
}




const deleteFicher =async(req,res)=>{  
    const  { id }= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error:'no delete mongo '})
  }
    Patient.findByIdAndDelete(id, (error, patient) => {
        if (error) {
          return res.status(400).json({
            error: error
          });
        }
        if (!patient) {
          return res.status(404).json({
            message: 'Patient non trouvé'
          });
        }
        res.status(200).json({
          message: 'Patient supprimé avec succès'
        });
      });
}
const updateFicher =async(req,res)=>{
    const  { id }= req.params;
    // Récupérer les données de mise à jour à partir du corps de la requête
    const data = req.body;
    Patient.findByIdAndUpdate(id, data, { new: true }, (error, patient) => {
        if (error) {
          return res.status(400).json({
            error: error
          });
        }
        if (!patient) {
          return res.status(404).json({
            message: 'Patient non trouvé'
          });
        }
        res.status(200).json({
            message: 'ficher modifier avec succès'
        });
      });
}


module.exports={
    createFicher,
    getAllFicher,
    getSingleFicher,
    deleteFicher,
    updateFicher,
 
}