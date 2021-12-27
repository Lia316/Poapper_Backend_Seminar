const express = require('express')
const cookieParser = require('cookie-parser')
const mysql = require('mysql')
const { NULL } = require('mysql/lib/protocol/constants/types')

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'poapper_backend'
})

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())

const cookieConfig = { httpOnly: true, maxAge: 10000, signed: true }

app.get('/', (req, res) => {
  console.log(req.cookies)
  res.sendFile(__dirname + "/view/index.html")
})

app.post('/signup', (req, res) => {
  const body = req.body
  const query_id = body.id
  const query_pw = body.password

  if (query_id != NULL && query_pw != NULL) {
    db.query(`INSERT INTO user (login_id, login_pw) VALUES ('${query_id}', '${query_pw}')`, (error, result) => {
      if (error) throw error
    })
  } else {
    console.log("Sign up failed...")
  }
  res.redirect(301, "/")
})

app.post('/login', (req, res) => {
  const body = req.body
  const id = body.id
  const pw = body.password
  var cookie_id =''; var cookie_pw='';

  db.query(`SELECT * FROM user WHERE login_id='${id}' AND login_pw='${pw}'`, (error, result) => {
    if (error) throw error
    console.log(result)
    
    if (result.length) {
      cookie_id = result[0].login_id
      cookie_pw = result[0].login_pw
    }
    console.log(id, pw, cookie_id, cookie_pw)

    if (id == cookie_id && pw == cookie_pw) {
      console.log("Login success")
      res.cookie('id', cookie_id)//, cookieConfig)
      res.cookie('password', cookie_pw)//, cookieConfig)
      res.sendFile(__dirname + "/view/secret_file.html")
    } else {
      console.log("Login failed...")
      res.redirect(301, "/")
    }
  })
})

app.listen(8080, () => console.log("Server is listening on 8080 port..."))