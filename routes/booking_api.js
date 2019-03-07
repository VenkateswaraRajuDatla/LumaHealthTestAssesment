const express = require('express');
const router = express.Router();


const db = require('../database/db');
const bookings =require('../model/bookings');

//book a appointment with the doctor
router.post("/addbookings", (req, res, next) => {
console.log("in add");
    let booking = new bookings(req.body.dc_id, req.body.pid,req.body.BookTime);

    db.query(booking.AddBookingSQL(), (err, data)=> {
        res.status(200).json({
            message:"booking added."
        });
    });
});

// getting all patients booked to a particular doctor
router.get("/bookings/:DoctorId", (req, res, next) => {
    let dcid = req.params.DoctorId;

    db.query(bookings.getPatientBookingByDoctorIdSQL(dcid), (err, data)=> {
        if(!err) {
            if(data && data.length > 0) {

                res.status(200).json({
                    message:"Patient list for a doctor",
                    doctor: data
                });
            } else {
                res.status(200).json({
                    message:"No patients Booked"
                });
            }
        }
    });
});

module.exports = router;
