const {DataTypes} = require('sequelize')
const sequelize = require('../utils/connection')

const Repair = sequelize.define('repair', {
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
})

module.exports = Repair