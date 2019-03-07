class doctors {

    constructor(name,startTime,endTime) {
        this.dc_name=name;
        this.dc_startTime=startTime;
        this.dc_endTime=endTime;
    }

//Adding all doctors to DOCTORS table
    AddDoctorSQL() {
        let sql = `INSERT INTO DOCTORS(DoctorName, StartTime, EndTime) \
                   VALUES('${this.dc_name}','${this.dc_startTime}','${this.dc_endTime}')`;
         console.log(sql);
        return sql;
    }

//getting a specifc doctor from DOCTORS table
   static getDoctorByIdSQL(dc_id) {
      console.log(dc_id);
        let sql = `SELECT * FROM DOCTORS WHERE DoctorID = ${dc_id}`;
        return sql;
    }

//update a doctor timings from DOCTORS table
     updateDoctorByNameSQL(dc_name) {
       console.log(dc_name);
         let sql = `UPDATE doctors SET StartTime='${this.dc_startTime}', EndTime='${this.dc_endTime}' WHERE DoctorName = '${dc_name}'`;
         console.log(sql);
         return sql;
     }

//getting all doctors from DOCTORS table
    static getAllDoctorSQL() {
        let sql = `SELECT * FROM DOCTORS`;
        return sql;
    }
}

module.exports= doctors;
