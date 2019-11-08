const express = require('express')
// const path = require('path')
const { mongoose } = require('./database')
const router = express.Router();
var bodyParser = require('body-parser')
const User = require('./models/user')

const app = express()

// Settings
app.set('port', process.env.PORT || 3030)

// Middlewares
app.use(express.json())

//app.use('/api/messages', require('./routes/message.routes'))

//functions
app.get('/', function (req, res) {
  res.send('Welcome to the Chat Server')
})

app.post("/", bodyParser.urlencoded({ extended: false }), function (req, res, next) {

  let userLogin = new User({
    username: req.body.id,
    password: req.body.pw
  })

  User.find({
    username: req.body.id,
    password: req.body.pw
  }).then(err, response => {
    console.error(err)
    console.log(response)
  })

  if (id == "test" && pw == "1234") {
    res.send("Welcome to the Chat Server")
  }
  else {
    res.send("Wrong username or password, try again")
  }
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})
