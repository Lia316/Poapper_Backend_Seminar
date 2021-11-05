const http = require('http')
const path = require('path')

const server = http.createServer((req, res) => {
    console.log(req.url)

    // 방법1. path를 파싱한 조각 사용하기 (사용 안 함)
    const pathStr = path.parse(req.url, true)

    // 방법2. path의 요소를 '/'를 기준으로 배열 만들기
    const pathArr = req.url.split('/')
    const operandA = Number(pathArr[2])
    const operandB = Number(pathArr[3])

    console.log(pathArr)

    if(pathArr[1] == 'add') {
        res.write(String(operandA + operandB))
    }
    else if (pathArr[1] == 'sub') {
        res.write(String(operandA - operandB))
    }
    else if (pathArr[1] == 'mul') {
        res.write(String(operandA * operandB))
    }
    else if (pathArr[1] == 'div') {
        res.write(String(operandA / operandB))
    }
    res.end()
})

server.listen(8080)

server.on('listening', () => {
    console.log("server is running on 8080 port.")
})

server.on('error', (error) => {
    console.log("error occured!")
    console.log("error description: ", error)
})