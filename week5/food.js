const http = require('http')
const mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'poapper_backend'
})

const server = http.createServer((req, res) => {
    const method = req.method
    const queryID = req.url.split('/')

    console.log(method)
    console.log(queryID)

    if (method == 'GET') {
        if(queryID[1] == '') {
            db.query(`SELECT * FROM foods`, (error, result) => {
                res.write(JSON.stringify(result))
                if(error) throw error
                res.end()
            })
        } else if(queryID[1] == 'food' && queryID[2] == 'isVegan') {
            db.query(`SELECT * FROM foods WHERE isVegan=1`, (error, result) => {
                res.write(JSON.stringify(result))
                if (error) throw error
                res.end()
            })
        } 
        else {
            db.query(`SELECT * FROM foods WHERE id=${queryID[1]}`, (error, result) => {
                res.write(JSON.stringify(result))
                if(error) throw error
                res.end()
            })
        }
    }
    else if (method == 'DELETE') {
        db.query(`DELETE FROM foods WHERE id=${queryID[1]}`, (error, result) => {
            if(error) throw error
            res.end()
        })
    }

    req.on('data', data => {
        const body = JSON.parse(data)
        console.log(body)

        if(method == 'POST') {
            db.query(`INSERT INTO foods (name, kcal, isVegan) VALUES ('${body.name}', '${body.kcal}', '${body.isVegan}')`, (error, result) => {
                if(error) throw error
                res.end()
            })
        }
        else if(method == 'PUT') {
            db.query(`UPDATE foods SET name='${body.name}', kcal='${body.kcal}', isVegan='${body.isVegan}' WHERE id=${queryID[1]}`, (error, result) => {
                if (error) throw error
                res.end()
            })
        }
    })
    
})

server.listen(8080)

server.on('listening', () => {
    console.log("server is running on 8080 port.")
})

server.on('error', (error) => {
    console.log(error)
})