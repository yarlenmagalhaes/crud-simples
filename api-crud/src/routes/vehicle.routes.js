const express = require('express')
const router = express.Router()
const Vehicle = require('../models/Vehicle')

// CREATE - Cadastrar veículo
router.post('/', async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body)
    res.status(201).json(vehicle)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// READ ALL - Listar todos os veículos
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll()
    res.json(vehicles)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// READ ONE - Buscar veículo por ID
router.get('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id)
    if (!vehicle) return res.status(404).json({ error: 'Veículo não encontrado' })
    res.json(vehicle)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// UPDATE - Atualizar veículo
router.put('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id)
    if (!vehicle) return res.status(404).json({ error: 'Veículo não encontrado' })
    await vehicle.update(req.body)
    res.json(vehicle)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// DELETE - Deletar veículo
router.delete('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id)
    if (!vehicle) return res.status(404).json({ error: 'Veículo não encontrado' })
    await vehicle.destroy()
    res.json({ message: 'Veículo deletado com sucesso' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router