const express = require('express');
const router = express.Router();


const db = require('../database/db');
const doctors =require('../model/doctors');


//to get the list of all the doctors
router.get("/doctors", (req, res, next) => {

    db.query(doctors.getAllDoctorSQL(), (err, data)=> {
        if(!err) {
            res.status(200).json({
                message:"doctors listed.",
                DoctorId:data
            });
        }
    });
});

//adding the doctor
router.post("/adddoctors", (req, res, next) => {
console.log("in add");
    let doctor = new doctors(req.body.dc_name, req.body.dc_startTime,req.body.dc_endTime);

    db.query(doctor.AddDoctorSQL(), (err, data)=> {
        res.status(200).json({
            message:"doctor added."
        });
    });
});

//get a specific doctor
router.get("/:DoctorId", (req, res, next) => {
    let dcid = req.params.DoctorId;

    db.query(doctors.getDoctorByIdSQL(dcid), (err, data)=> {
        if(!err) {
            if(data && data.length > 0) {

                res.status(200).json({
                    message:"doctor found.",
                    doctor: data
                });
            } else {
                res.status(200).json({
                    message:"doctor Not found."
                });
            }
        }
    });
});



//Update a doctor timings
router.put("/Update/:DoctorName", (req, res, next) => {
console.log("in update");
    let doctor = new doctors(req.body.dc_name, req.body.dc_startTime,req.body.dc_endTime);
console.log(req.body.dc_name);
    db.query(doctor.updateDoctorByNameSQL(req.body.dc_name), (err, data)=> {
        res.status(200).json({
            message:"doctor Updated."
        });
    });
});



module.exports = router;
