const express = require('express');
const router = express.Router();
const userHandler = require('./handler/users');
const verify = require('../middleware/VerifyTokens');

//Sintax dibawah ini hanya untuk pengalamatan jika ingin melakukan test melalui service-users
//sintaks yang dibawah ini harus sesuai dg yang ada pada api-gateway di folder handler/users
router.post('/register', userHandler.register);
router.post('/login', userHandler.login);
router.put('/update/:id', verify, userHandler.update);
router.get('/user/:id', verify, userHandler.userById);
router.get('/', verify, userHandler.getUsers);
router.delete('/delete/:id', verify, userHandler.delUser);

module.exports = router;
