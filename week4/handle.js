const http = require('http')

let database = {}
let idx = 0

const server = http.createServer((req, res) => {
    const method = req.method
    const url_parsed = req.url.split('/')

    console.log(method)
    console.log(url_parsed)

    switch(method) {
        case 'GET':
            if(url_parsed[1] == '') {
                // undefined type 등, 비어있는 database를 stringify할 때
                try {
                    res.write(JSON.stringify(database))
                } catch (error) {
                    console.log(error)
                }
            } else {
                // database 에 존재하지 않는 index값 요청
                try {
                    const url_idx = Number(url_parsed[1]);
                    res.write(database[url_idx]);
                } catch (error) {
                    console.log(error)
                }
            }
            break
        case 'POST':
            database[idx] = url_parsed[1]
            idx++
            break
        case 'PUT':
            // database 에 존재하지 않는 index값 요청
            try {
                const url_idx = Number(url_parsed[1])
                const url_data = url_parsed[2]
                database[url_idx] = url_data
            } catch (error) {
                console.log(error)
            }
            break
        case 'DELETE':
            // database 에 존재하지 않는 index값 요청
            try {
                const url_idx = Number(url_parsed[1])
                database[url_idx] = undefined
            } catch (error) {
                console.log(error)
            }
            break
    }
    console.log(database)
    res.end()
})

server.listen(8080) 

server.on('listening', () => {
    console.log("server is running on 8080 port.")
})

server.on('error', (error) => {
    console.log(error)
})