const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url)

    if (req.url == '/') {
        fs.readFile('./Developer/Poapper_Backend_Seminar/week3/test.html', (err, data) => {
            if (err) throw err
            res.write(data)
            res.end()
        })
    }
    else if (req.url == '/about') {
        fs.readFile()
    }
})

server.listen(8080)

server.on('listening', () => {
    console.log("server is running on 8080 port.")
})

server.on('error', (error) => {
    console.log("error occured!!")
    console.log("this is content of error\n", error)
})