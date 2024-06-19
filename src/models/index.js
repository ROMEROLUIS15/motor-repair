const User = require('./User')
const Repair = require('./Repair')

User.hasMany(Repair)
Repair.belongsTo(User)