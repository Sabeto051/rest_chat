const express = require('express')
const router = express.Router()
const Message = require('../models/message')

router.post('/create', async (req, res) => {
  let message = new Message({
    owner: req.body.owner,
    content: req.body.content
  })
  await message.save()
  res.json({ status: 'message created' })
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
