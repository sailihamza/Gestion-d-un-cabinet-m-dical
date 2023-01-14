const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
  patient: {
    firstName: {
      type: String,
      required: true
    },////
    lastName: {
      type: String,
      required: true
    },//
    dob: {
      type: Date,
      required: true,
      
    },//
    ssn: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },//
    primaryCarePhysician: {
      type: String,
      required: true
    }
  },
  appointments: [{
    date: {
      type: Date,
      required: true
    },
    reason: {
      type: String,
      required: true
    },
    diagnoses: [{
      type: String
    }],
    treatments: [{
      type: String
    }]
  }],
  prescriptions: [{
    medication: {
      type: String,
      required: true
    },
    dose: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    }
  }],
  testResults: [{
    testName: {
      type: String,
      required: true
    },
    result: {
      type: String,
      required: true
    }
  }],
  notes: {
    type: String
  }
});

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

module.exports = MedicalRecord;





























/*
Nom et prénom du patient
Date de naissance du patient
Numéro de sécurité sociale du patient
Adresse du patient
Numéro de téléphone du patient
Médecin traitant du patient
Informations sur les rendez-vous précédents, y compris la date, le motif de la consultation, les diagnostics et les traitements prescrits
Informations sur les prescriptions médicales, y compris les médicaments prescrits, les doses et la durée de traitement
Résultats d'examens et de tests médicaux, le cas échéant
Notes et observations du médecin concernant l'état de santé du patient
*/






































/*

{
  "patient": {
    "firstName": "John",
    "lastName": "Doe",
    "dob": "1990-01-01",
    "ssn": "123-45-6789",
    "address": "123 Main Street, Anytown, USA 12345",
    "phone": "555-555-1212",
    "primaryCarePhysician": "Dr. Jane Smith"
  },
  "appointments": [{
    "date": "2022-01-01",
    "reason": "Annual Physical",
    "diagnoses": ["Hypertension", "High Cholesterol"],
    "treatments": ["Medication", "Lifestyle Changes"]
  },
  {
    "date": "2022-03-01",
    "reason": "Sore Throat",
    "diagnoses": ["Strep Throat"],
    "treatments": ["Antibiotics"]
  }],
  "prescriptions": [{
    "medication": "Lisinopril",
    "dose": "20 mg",
    "duration": 30
  },
  {
    "medication": "Atorvastatin",
    "dose": "40 mg",
    "duration": 90 
  }],
  "testResults": [{
    "testName": "Lipid Panel",
    "result": "Total cholesterol: 200 mg/dL\nHDL cholesterol: 50 mg/dL\nLDL cholesterol: 130 mg/dL\nTriglycerides: 150 mg/dL"
  },
  {
    "testName": "Blood Pressure",
    "result": "Systolic: 120 mm Hg\nDiastolic: 80 mm Hg"
  }],
  "notes": "Patient has been advised to make lifestyle changes to improve blood pressure and cholesterol levels."
}






*/