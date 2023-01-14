const mongoose  = require('mongoose')
const MedicalRecord = require('../models/dossier_mod')



const getAllDossier = async (req, res) => {
    const workouts = await MedicalRecord.find({}).sort({createdAt: -1})
  
    res.status(200).json(workouts)

};



// get a single dossier
const getSingleDossier = async (req, res) => {
  const  { id }= req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'no single '})
}

  // Récupérer le dossier médical correspondant à l'ID de la base de données
  MedicalRecord.findById(id, (error, record) => {
    if (error) {
      return res.status(400).json({
        error: error
      });
    }
    if (!record) {
      return res.status(404).json({
        message: 'Dossier médical non trouvé'
      });
    }
    res.status(200).json({
      record: record
    });
  });
  }



const createDossier =async(req,res)=>{
  const medicalRecord = new MedicalRecord(req.body);

  // Enregistrer le dossier médical dans la base de données
  medicalRecord.save((error, result) => {
    if (error) {
      return res.status(400).json({
        error: error.message 
      });
    }
    res.status(200).json({
      message: 'Dossier médical créé avec succès'
    });
  });
}



const deleteDossier =async(req,res)=>{
  const  { id }= req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'no delete mongo '})
}
  MedicalRecord.findByIdAndDelete(id, (error, record) => {
    if (error) {
      return res.status(400).json({
        error: error
      });
    }
    if (!record) {
      return res.status(404).json({
        message: 'Dossier médical non trouvé'
      });
    }
    res.status(200).json({
      message: 'Dossier médical supprimé avec succès'
    });
  });
}
const updateDossier =async(req,res)=>{
  const  { id }= req.params;
  // Récupérer les données de mise à jour à partir du corps de la requête
  const data = req.body;
  // Mettre à jour le dossier médical correspondant à l'ID de la base de données
  MedicalRecord.findByIdAndUpdate(id, data, { new: true }, (error, record) => {
    if (error) {
      return res.status(400).json({
        error: error
      });
    }
    if (!record) {
      return res.status(404).json({
        message: 'Dossier médical non trouvé'
      });
    }
    res.status(200).json({
      message: 'Dossier médical modifier avec succès'
    });
  });
}
module.exports={

  createDossier,
  getAllDossier,
  getSingleDossier,
  deleteDossier,
  updateDossier,
 
}