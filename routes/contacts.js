const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   GET  api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    return res.status(200).json(contacts);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

// @route   POST  api/contacts
// @desc    Get all users contacts
// @access  Private
router.post('/', (req, res) => {
  return res.send('Add contact');
});

// @route   PUT  api/contacts/:id
// @desc    Update contact
// @access  Private
router.post('/:id', (req, res) => {
  return res.send('Update contact');
});

// @route   DELETE  api/contacts/:id
// @desc    delete contact
// @access  Private
router.delete('/:id', (req, res) => {
  return res.send('delete contact');
});

module.exports = router;
