const express = require('express')
const cors = require('cors')
const router = require('./routes')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/api/v1',router)

app.get('/', (req,res) => {
    return res.send('Welcome to my API-Motors Repairs')
})


module.exports = app