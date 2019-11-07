const mongoose = require('mongoose')
const URI =
  'mongodb+srv://santiago:asdf@sabeto-ertzi.mongodb.net/rest_chat?retryWrites=true&w=majority'
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(db => console.log('DB is connected'))
  .catch(err => console.error('Error: \n' + err.message))

module.exports = mongoose
