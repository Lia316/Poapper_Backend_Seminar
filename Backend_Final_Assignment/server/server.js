const express = require('express')
const studyRouter = require(__dirname + '/router/study.js')
const port = 8080;

const app = express()
app.use(express.json())
app.use("/study", studyRouter)


app.listen(port, () => {
    console.log(`server is running on ${port} port.`)
})
