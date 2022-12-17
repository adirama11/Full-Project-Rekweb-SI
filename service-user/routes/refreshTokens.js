const express = require('express')
const router = express.Router();
const refreshHandler = require('./handler/refresh-tokens/createTokens')

router.post('/', refreshHandler);

module.exports = router
