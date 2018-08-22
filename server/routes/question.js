const routes = require('express').Router()
const questionController = require('../controllers/question')

routes.get('/', questionController.findAll)
routes.get('/random', questionController.findRandom)
routes.post('/create', questionController.create)
routes.post('/createMany', questionController.createMany)

module.exports = routes