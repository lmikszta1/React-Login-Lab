const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

// POST route to handle a controller function
router.post('/', usersCtrl.create)
router.post('/login', usersCtrl.login)

module.exports = router