const express = require('express')
const { getRepairs, createRepair } = require('../controllers/repair.controllers')
const repairRouter = express.Router()

repairRouter.route('/repairs')
.get(getRepairs)
.post(createRepair)

module.exports = repairRouter