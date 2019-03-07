const mysql = require('mysql');

const pool = mysql.createPool({
            host     : 'localhost',
            user     : 'hbstudent',
            password : 'hbstudent',
            database : 'BOOKINGSYSTEM'
            });

function executeQuery(sql, callback) {
    pool.getConnection((err,connection) => {
        if(err) {
          console.log(err);
            return callback(err, null);
        } else {
            if(connection) {
              console.log("in method");
                connection.query(sql, function (error, results) {
                connection.release();
                if (error) {
                    console.log(error);
                    return callback(error, null);
                }
                console.log("results");
                return callback(null, results);
                });
            }
        }
    });
}

function query(sql, callback) {
    executeQuery(sql,function(err, data) {
        if(err) {
            return callback(err);
        }
        callback(null, data);
    });
}

module.exports = {
    query: query
}
