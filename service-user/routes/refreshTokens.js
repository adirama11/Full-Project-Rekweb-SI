const express = require('express')
const router = express.Router();

const refreshHandler = require('./handler/refresh-tokens/createTokens')

router.post('/refresh', refreshHandler)

module.exports = router
