const express = require('express')
const router = express.Router()
const mysql = require('mysql')
require("dotenv").config({ path: __dirname + '/.env'})

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

router.get('/:id', (req, res) => {
    const id = req.params.id
    
    db.query(`SELECT * FROM cards WHERE level=${id}`, (error, result) => {
        if (error) throw error
        res.send(result)
    })
})

router.get('/level/:id', (req, res) => {
    const id = req.params.id

    db.query(`SELECT * FROM cards WHERE level=${id}`, (error, result) => {
        if (error) throw error
        res.send(result)
    })
})

router.post('/', (req, res) => {
    const body = req.body
    const q_word = body.word
    const q_mean = body.mean
    const q_level = body.level

    db.query(`INSERT INTO cards (word, mean, level) VALUES ('${q_word}', '${q_mean}', '${q_level}')`, (error, result) => {
        if (error) throw error
    })
    res.end()
})

router.post('/level', (req, res) => {
    const body = req.body
    const q_id = body.id
    const q_nextLv = body.nextLv

    db.query(`UPDATE cards SET level='${q_nextLv}' WHERE id='${q_id}'`, (error, result) => {
        if (error) throw error
    })
    res.end()
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    db.query(`DELETE FROM cards WHERE id=${id}`, (error, result) => {
        if (error) throw error
    })
    res.end()
})

module.exports = router