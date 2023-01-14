1)gestion et suivi du dossier medical

CREATE TABLE patients (
  id INTEGER PRIMARY KEY,//
  first_name VARCHAR(255) NOT NULL,//
  maiden_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,//
  dob DATE NOT NULL,//
  gender CHAR(1) NOT NULL,
  ssn VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,//
  phone VARCHAR(255) NOT NULL,//
  primary_care_physician VARCHAR(255) NOT NULL
  mobile_phone VARCHAR(255) NOT NULL,
  profession VARCHAR(255) NOT NULL
);

CREATE TABLE consultations (
  id INTEGER PRIMARY KEY,
  patient_id INTEGER NOT NULL,
  doctor_id INTEGER NOT NULL,
  dat DATE NOT NULL,
  reason VARCHAR(255) NOT NULL,
  FOREIGN KEY (patient_id) REFERENCES patients(id),
  FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);

CREATE TABLE prescriptions (
  id INTEGER PRIMARY KEY,
  consultation_id INTEGER NOT NULL,
  medication VARCHAR(255) NOT NULL,
  dose VARCHAR(255) NOT NULL,
  duration INTEGER NOT NULL,
  FOREIGN KEY (consultation_id) REFERENCES consultations(id)
);

CREATE TABLE home_visits (
  id INTEGER PRIMARY KEY,
  patient_id INTEGER NOT NULL,
  doctor_id INTEGER NOT NULL,
  dat DATE NOT NULL,
  reason VARCHAR(255) NOT NULL,
  FOREIGN KEY (patient_id) REFERENCES patients(id),
  FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);

CREATE TABLE notes (
  id INTEGER PRIMARY KEY,
  consultation_id INTEGER NOT NULL,
  notes VARCHAR(255) NOT NULL,
  FOREIGN KEY (consultation_id) REFERENCES consultations(id)
);

CREATE TABLE doctors (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  specialization VARCHAR(255) NOT NULL
);





2)gestion de rendez vous 
CREATE TABLE patients (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  dob DATE NOT NULL,
  ssn VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  primary_care_physician VARCHAR(255) NOT NULL
);

CREATE TABLE appointments (
  id INTEGER PRIMARY KEY,
  patient_id INTEGER NOT NULL,
  doctor_id INTEGER NOT NULL,
  dat DATE NOT NULL,
  time TIME NOT NULL,
  reason VARCHAR(255) NOT NULL,
  FOREIGN KEY (patient_id) REFERENCES patients(id),
  FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);

CREATE TABLE doctors (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  specialization VARCHAR(255) NOT NULL
);

/*
3)gestion du ficher patiens

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
CREATE TABLE patients (
  id INTEGER PRIMARY KEY,//
  first_name VARCHAR(255) NOT NULL,//
  maiden_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,//
  dob DATE NOT NULL,//
  gender CHAR(1) NOT NULL,
  phone VARCHAR(255) NOT NULL,//
  address VARCHAR(255) NOT NULL,//
  mobile_phone VARCHAR(255) NOT NULL,
  profession VARCHAR(255) NOT NULL
);



CREATE TABLE medical_records (
  id INTEGER PRIMARY KEY,
  patient_id INTEGER NOT NULL,
  pathology VARCHAR(255) NOT NULL,
  evolution VARCHAR(255) NOT NULL,
  FOREIGN KEY (patient_id) REFERENCES patients(id)
);
