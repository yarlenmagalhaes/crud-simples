const Vehicle = require('../models/Vehicle')

const create = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body)
    res.status(201).json(vehicle)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const findAll = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll()
    res.json(vehicles)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const findOne = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id)
    if (!vehicle) return res.status(404).json({ error: 'Veículo não encontrado' })
    res.json(vehicle)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const update = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id)
    if (!vehicle) return res.status(404).json({ error: 'Veículo não encontrado' })
    await vehicle.update(req.body)
    res.json(vehicle)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const remove = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id)
    if (!vehicle) return res.status(404).json({ error: 'Veículo não encontrado' })
    await vehicle.destroy()
    res.json({ message: 'Veículo deletado com sucesso' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { create, findAll, findOne, update, remove }