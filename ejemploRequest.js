const request = require('request')

var body = JSON.stringify({
  owner: 'el santi',
  content: 'mensaje prueba server2'
})
var options1 = {
  method: 'POST',
  encoding: 'utf-8',
  url: 'http://172.105.22.206:3000/api/messages/create',
  headers: {
    'Content-Type': 'application/json'
  },
  body: body
}

request(options1, (error, response, body) => {
  if (error) {
    console.log(error)
  } else {
    console.log(JSON.parse(body))
  }
})
