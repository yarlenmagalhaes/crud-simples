const express = require('express')
const sequelize = require('./config/database')
const vehicleRoutes = require('./routes/vehicle.routes')
const Vehicle = require('./models/Vehicle')

const app = express()
app.use(express.json())

const PORT = 3000

sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ Banco sincronizado!')
    app.use('/vehicles', vehicleRoutes)
    app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`))
  })
  .catch(err => console.error('❌ Erro:', err))