const express = require('express');
const router = express.Router();
const db = require('../db_connection/dbconnection')


router.get('/', (req, res, next)=> {
  // 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.
  db.query('SELECT * FROM board', function (err, results, fields) {
    if (!err) {
      console.log(results[0])
      res.json(results)
    }else{
      console.log("에러났어")
    }
  });
});


module.exports = router;
