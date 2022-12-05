const login = require('./login');
const userById = require('./getUser')
const getUsers = require('./getUsers');
const register = require('./register');
const update = require('./update');
const delUser = require('./delUser');

module.exports = { getUsers, register, update, login, userById, delUser}