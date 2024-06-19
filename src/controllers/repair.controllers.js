const Repair = require('../models/Repair')
const User = require('../models/User')

const getRepairs = async(req, res) => {
    try {
        const repairs = await Repair.findAll({include: 
            [{model: User, 
            attributes: { exclude: ["password"]}}]})
        return res.json({
            message: "pending",
            repairs
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "Internal server error",
            error
        })
    }
}

const createRepair = async(req,res) => {
    try {
        const {date, userId} = req.body;
        const repair = await Repair.create({date,userId});
        return res.json(repair);
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "Internal server error",
            error
        })
    }
}

module.exports = {
    getRepairs,
    createRepair
}