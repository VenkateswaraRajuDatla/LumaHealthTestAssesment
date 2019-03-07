const express = require('express');
const router = express.Router();

const db = require('../database/db');
const patients =require('../model/patients');

//adding patient details
router.post("/addpatients", (req, res, next) => {
console.log("in add");
    let patient = new patients(req.body.patient_name, req.body.patient_details);

    db.query(patient.AddPatientSQL(), (err, data)=> {
        res.status(200).json({
            message:"patient added."
        });
    });
});

//getting the patient list
router.get("/patients", (req, res, next) => {

    db.query(patients.getAllPatientSQL(), (err, data)=> {
        if(!err) {
            res.status(200).json({
                message:"Patients listed.",
                PatientId:data
            });
        }
    });
});

//get the specific patient details
router.get("/:PatientId", (req, res, next) => {
    let pid = req.params.PatientId;

    db.query(patients.getPatientByIdSQL(pid), (err, data)=> {
        if(!err) {
            if(data && data.length > 0) {

                res.status(200).json({
                    message:"patient found.",
                    patient: data
                });
            } else {
                res.status(200).json({
                    message:"patient Not found."
                });
            }
        }
    });
});

module.exports = router;
