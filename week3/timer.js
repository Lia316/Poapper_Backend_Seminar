const http = require('http')
const moment = require('moment')

const today = moment()

const server = http.createServer((req, res) => {
    console.log(req.url)

    if(req.url == '/timer') {
        res.write(today.format('YYYY-MM-DD hh:mm:ss'))
        res.end()
    }
})

server.listen(8080)

server.on('listening', () => {
    console.log("server is running on 8080 port.")
})

server.on('error', (error) => {
    console.log("error occured!")
    console.log("error description: ", error)
})