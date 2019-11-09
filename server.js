const path = require('path')
const express = require('express')
const app = express()

// settings
app.set('port', process.env.PORT || 3002)

app.use(express.json())

// static files
app.use(express.static(path.join(__dirname, 'public')))

app.post('/aaa', (req, res) => {
  // console.log(req)
  console.log(req.body)
})

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})
