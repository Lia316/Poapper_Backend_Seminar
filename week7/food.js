const express = require('express')
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'poapper_backend'
})

const router = express.Router()

router.get('', (req, res) => {
    db.query(`SELECT * FROM foods`, (error, result) => {
        if (error) throw error
        res.send(result)
    })
})

router.get('/favicon.ico', (req, res) => {

})

router.get('/isVegan', (req, res) => {
    db.query(`SELECT * FROM foods WHERE isVegan=1`, (error, result) => {
        if (error) throw error
        res.send(result)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    db.query(`SELECT * FROM foods WHERE id=${id}`, (error, result) => {
        if (error) throw error
        res.send(result)
    })
})

router.delete('/:id', (req, res) => {
    if (req.cookies.id != '') {
        const id = req.params.id
        db.query(`DELETE FROM foods WHERE id=${id}`, (error, result) => {
            if (error) throw error
            res.send(result)
        })
    } else {
        res.end()
    }
})

router.post('/', (req, res) => {
    const body = req.body
    console.log('💝', body)
    if (req.cookies.id != '') {
        db.query(`INSERT INTO foods (name, kcal, isVegan) VALUES ('${body.name}', '${body.kcal}', '${body.isVegan}')`, (error, result) => {
            if (error) throw error
            res.send(result)
        })
    } else {
        res.end()
    }
})

router.put('/:id', (req, res) => {
    if (req.cookies.id != '') {
        const id = req.params.id
        const body = req.body

        db.query(`UPDATE foods SET name='${body.name}', kcal='${body.kcal}', isVegan='${body.isVegan}' WHERE id=${id}`, (error, result) => {
            if (error) throw error
            res.end()
        })
    } else {
        res.end()
    }
})

module.exports = router