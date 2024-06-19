const Repair = require('../models/Repair');
const User = require('../models/User')

const getUsers = async(req, res) => {
    try {
        const users = await User.findAll({include:[Repair]});
        return res.json(users);
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "Internal server error",
            error
        })
    }
}



const createUser = async(req,res) => {
    try { 
        const {name, email, password, role} = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: 'name, email, password, and role are required.' });
        }

        const registeredUser = await User.findOne({ where: { email } });
        if (registeredUser) {
            return res.status(400).json({ message: 'Email is already registered.' });
        }

        const user = await User.create({name, email, password, role});
        return res.json(user);
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "Internal server error",
            error
        })
    }
}



const getOne = async(req,res) => {
    try {
        const {id} = req.params
        const user = await User.findByPk(id, {include: [Repair]})

        if(!user){
            return res.status(404).json({
                status: "error",
                message: `User with ${id} not found`,
                })
        }
        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "Internal server error",
            error
        })
    }
}



module.exports = {
    getUsers,
    createUser,
    getOne
}