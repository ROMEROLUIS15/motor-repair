const { getUsers, createUser, getOne } = require('../controllers/user.controllers');
const express = require('express');


const userRouter = express.Router();

userRouter.route('/users')
    .get(getUsers)
    .post(createUser)

userRouter.route('/users/:id')
.get(getOne)

module.exports = userRouter;
