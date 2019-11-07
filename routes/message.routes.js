const express = require('express')
const router = express.Router()
const Message = require('../models/message')

router.get('/create', async () => {
  let message = new Message({
    owner: 'Santiago',
    content: 'Hola a todos'
  })
  await message.save(function(err, user) {
    if (err) {
      console.log(err)
      // res.send(400, 'Bad Request')
      res.json({ status: 'Error' })
      return
    }

    console.log(message)
    res.json({ status: 'message created' })
  })
})

// delete 1
router.delete('/', async (req, res) => {
  let resMessage = 'message deleted'
  await Message.findByIdAndRemove(String(req.query.id)).catch(err => {
    console.error('Error: ' + err.message)
    resMessage = 'Error'
  })
  res.json({ status: resMessage })
})
// delete 2
router.delete('/:id', async (req, res) => {
  let resMessage = 'message deleted'
  await Message.findByIdAndRemove(String(req.params.id)).catch(err => {
    console.error('Error: ' + err.message)
    resMessage = 'Error'
  })

  res.json({ status: resMessage })
})

module.exports = router
