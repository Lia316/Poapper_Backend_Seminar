const express = require('express')
const router = express.Router()
const mysql = require('mysql')
require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

router.get('/', (req, res) => {
    db.query(`SELECT * FROM cards`, (error, result) => {
        if (error) throw error
        res.send(result)
    })
})

module.exports = router