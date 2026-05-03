const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Vehicle = sequelize.define('Vehicle', {
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Vehicle