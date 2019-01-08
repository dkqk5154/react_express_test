const express = require('express');
const router = express.Router();
const mysql = require('mysql');


router.get('/', (req, res, next)=> {
  // 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.
  var pass = null;
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1111',
    database : 'studydb'
  });
  connection.connect();
  connection.query('SELECT * FROM board', function (error, results, fields) {
      if (error) {
          console.log(error);
      }
      pass = JSON.stringify(results)
  });
  res.send('respond with a resource');
});

module.exports = router;
