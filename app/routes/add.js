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
    const uniqueRandom = require('unique-random');
    const random = uniqueRandom(1, 10);
    connection.query("INSERT INTO INFORMATION (id, NAME,AGE) values(" + random() + "', arun', 22)", function(error, results, fields){
        if (error) console.log('Error');
        res.send(results);
    });
      
  });
  
module.exports = route;