const express = require('express')
// const path = require('path')
const { mongoose } = require('./database')
const router = express.Router();
var bodyParser = require('body-parser')

const app = express()

// Settings
app.set('port', process.env.PORT || 3030)

// Middlewares
app.use(express.json())

app.use('/api/messages', require('./routes/message.routes'))

//functions
app.get('/', function (req, res) {
  res.send('Welcome to the Chat Server')
})

app.post("/", bodyParser.urlencoded({ extended: false }), function (req, res, next) {
  var id = req.body.id;
  var pw = req.body.pw;

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
