const express = require('express');
const route = express.Router();
const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'durgesh07',
    database : 'students'
  });
  
  connection.connect();
  
  route.use('/', (req, res)=>{
      connection.query("DELETE FROM INFORMATION WHERE name='arun'", function(error, results, fields){
          if (error) console.log('Error');
          res.send(results);
      });
    });

module.exports = route;