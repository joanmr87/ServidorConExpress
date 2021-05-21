
const express = require ("express");
const add = require('./add.js');
const show = require('./show.js');
const remove = require('./remove.js');
const list = require('./list')


const usersRouting = express.Router();

add(usersRouting);
show(usersRouting);
remove(usersRouting);
list(usersRouting);

const userAPI = express.Router();
userAPI.use('/users', usersRouting);




module.exports = userAPI;