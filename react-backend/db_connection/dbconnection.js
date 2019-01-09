const mysql = require('mysql');

let connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '1111',
    database : 'studydb'
  });

  module.exports=connection;

  /*connection.query('SELECT * FROM board', function (error, results, fields) {
      if (error) {
          console.log(error);
      }
      pass = JSON.stringify(results)
      console.log("연결했어")
  }); */