const express = require('express');
const bodyparser = require('body-parser');
var cors = require('cors');

const doctor_api =require ('./routes/doctor_api');
const patient_api =require ('./routes/patient_api');
const booking_api =require ('./routes/booking_api');

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use("/doctor_api",doctor_api);
app.use("/patient_api",patient_api);
app.use("/booking_api",booking_api);

app.use((req,res,next)=> {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

//all other requests are not implemented.
app.use((err,req, res, next) => {
   res.status(err.status || 501);
   res.json({
       error: {
           message: err.message
       }
   });
});
module.exports = app;
