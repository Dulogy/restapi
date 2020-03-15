const express  = require('express');
const app = express();

const userRoute = require('./routes/user.js');
const deleteUserRoute = require('./routes/delete.js');
const addUserRoute = require('./routes/add.js');

app.get('/user', userRoute);
app.get('/delete', deleteUserRoute);
app.get('/add', addUserRoute);

app.listen(3000);