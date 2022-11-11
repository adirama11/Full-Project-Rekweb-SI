var express = require('express');
var router = express.Router();
const usersHandler = require('./handler/users');


//Sintax dibawah tidak harus sesuai dg service-user yang ada di file di handler/users
//Sintax dibawah ini hanya untuk pengalamatan jika ingin melakukan test melalui api-gateway
router.post('/regis', usersHandler.register);
router.post('/log', usersHandler.login);
router.get('/get/:id', usersHandler.getUser);
router.get('/user', usersHandler.getUsers);
router.put('/update/:id', usersHandler.update);
router.delete('/del/:id', usersHandler.delUser);

module.exports = router;
