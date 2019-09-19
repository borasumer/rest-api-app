const router = require('express').Router();
const User = require('../models/user')

//!get list of user from the database
router.get('/users', async (req, res) => {
  try {
    const response = await User.find();
    res.send(response)
  } catch (e) {
    next(e)
  }
})

//!add a new user to the database
router.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (err) {
    res.status(422).json({ message: err.message })
  }
})

//!update a user
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(user)
  } catch (err) {
    res.status(422).json({ message: err.message })
  }
})

//!delete a user
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.send(user)
  } catch (err) {
    res.status(422).json({ message: err.message })
  }
})

module.exports = router;