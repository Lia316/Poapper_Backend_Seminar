const express = require('express')
const foodRouter = require('./Poapper_Backend_Seminar/week6/food.js')

const app = express()
app.use(express.json())
app.use("/food", foodRouter)

app.get('', (req, res) => {
    res.send("Hello Express!")
})

app.listen(8080, () => {
    console.log("server is running on 8080 port.")
})
