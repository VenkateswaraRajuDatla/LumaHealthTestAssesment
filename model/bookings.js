class bookings{
    constructor(DoctorID,PatientID,BookingTime)
    {
      this.DoctorID=DoctorID;
      this.PatientID=PatientID;
      this.BookingTime=BookingTime;
    }

//Adding Booking method
    AddBookingSQL() {
        let sql = `INSERT INTO DOCTORPATIENTRELATION(DoctorID,PatientID,BookingTime) \
                   VALUES('${this.DoctorID}','${this.PatientID}','${this.BookingTime}')`;
         console.log(sql);
        return sql;
    }

//Getting the Patient Booking of a specific doctor
  static getPatientBookingByDoctorIdSQL(did) {
    let sql = `SELECT PATIENTS.* FROM PATIENTS JOIN DOCTORPATIENTRELATION ON PATIENTS.PatientID = DOCTORPATIENTRELATION.PatientID WHERE DOCTORPATIENTRELATION.DoctorID=${did}`;
     console.log(sql);
    return sql;
  }

}

module.exports=bookings;
