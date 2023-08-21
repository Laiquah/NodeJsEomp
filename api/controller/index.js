const express = require('express')
const bodyParser = require('body-parser')
const { verifyAToken } = require('../middleware/AuthenticateUser')
const routes = express.Router()
const { users, products } = require('../model')

// ========== User routes ==========