const express = require('express')
// const path = require('path')
const { mongoose } = require('./database')

const app = express()

// Settings
app.set('port', process.env.PORT || 3001)

// Middlewares
app.use(express.json())

app.use('/api/messages', require('./routes/message.routes'))

//functions
app.get('/', function(req, res) {
  res.send('Welcome to the Chat History')
})

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})
