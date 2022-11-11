const login = require('./login');
const getUser = require('./getUser')
const getUsers = require('./getUsers');
const register = require('./register');
const update = require('./update');
const delUser = require('./delUser');

module.exports = { getUsers, register, update, login, getUser, delUser}