const routes = require('express').Router()
const questionController = require('../controllers/question')

routes.get('/', questionController.findAll)
routes.get('/random', questionController.findRandom)

module.exports = routes