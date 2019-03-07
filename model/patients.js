class patients{

  constructor(patient_name,patient_details)
    {
      this.patient_name=patient_name;
      this.patient_details=patient_details;
    }

//Adding Patients into PATIENTS table
    AddPatientSQL() {
        let sql = `INSERT INTO PATIENTS(Name,Details) \
                   VALUES('${this.patient_name}','${this.patient_details}')`;
         console.log(sql);
        return sql;
    }

//getting all patients from PATIENTS table
    static getAllPatientSQL() {
        let sql = `SELECT * FROM PATIENTS`;
        return sql;
    }

//getting a specific patient from PATIENTS table
    static getPatientByIdSQL(pid) {
       console.log(pid);
         let sql = `SELECT * FROM PATIENTS WHERE PatientID = ${pid}`;
         console.log(sql);
         return sql;
     }
}
module.exports= patients;
