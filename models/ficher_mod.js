const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },//
  maidenName: {
    type: String
  },
  dob: {
    type: Date,
    required: true
  },//
  gender: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },//
  address: {
    type: String,
    required: true
  },//
  mobile: {
    type: String
  },
  profession: {
    type: String
  }
});

module.exports = mongoose.model('Patient', patientSchema);
/*
firstName: Le prénom du patient.
lastName: Le nom de famille du patient.
maidenName: Le nom de jeune fille du patient (si applicable).
dob: La date de naissance du patient.
gender: Le genre du patient.
phone: Le numéro de téléphone du patient.
address: L'adresse du patient.
mobile: Le numéro de téléphone portable du patient (si applicable).
profession: La profession du patient (si applicable).
*/