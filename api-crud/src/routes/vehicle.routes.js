const express = require('express')
const router = express.Router()
const VehicleController = require('../controllers/vehicle.controller')

router.post('/', VehicleController.create)
router.get('/', VehicleController.findAll)
router.get('/:id', VehicleController.findOne)
router.put('/:id', VehicleController.update)
router.delete('/:id', VehicleController.remove)

module.exports = router
