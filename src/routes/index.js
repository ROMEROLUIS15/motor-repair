const express = require('express');
const userRouter = require('./user.route');
const repairRouter = require('./repair.route');

const router = express.Router();

router.use(userRouter)
router.use(repairRouter)

module.exports = router;
