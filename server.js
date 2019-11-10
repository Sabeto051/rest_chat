const path = require('path')
const express = require('express')
const request = require('request')
const app = express()

// settings
app.set('port', process.env.PORT || 3000)

app.use(express.json())

// static files
app.use(express.static(path.join(__dirname, 'public')))

app.post('/send', (req, res) => {
  var body = JSON.stringify({
    owner: req.body.username,
    content: req.body.message
  })
  var options = {
    method: 'POST',
    encoding: 'utf-8',
    url: 'http://172.105.22.206:3000/api/messages/create',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  }
  request(options, (error, response, body) => {
    if (error) {
      console.log(error)
    } else {
      // console.log(JSON.parse(body))
      res.send(body)
    }
  })
})

app.get('/history', (req, res) => {
  var options = {
    method: 'GET',
    encoding: 'utf-8',
    url: 'http://172.105.22.206:3001/api/messages/history'
  }

  request(options, (error, response, body) => {
    if (error) {
      console.log(error)
    } else {
      // let history = JSON.parse(body)
      // console.log(body)
      res.send(body)
    }
  })
})

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})
