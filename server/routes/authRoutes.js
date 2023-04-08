const express = require('express')
const authRouter = express.Router()

const { createUser } = require('../controllers/authController')

//ALT -> authRouter.route('/api/signup').post().get().......
authRouter.post('/api/signup', createUser)

module.exports = authRouter
