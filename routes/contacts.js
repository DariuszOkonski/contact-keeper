const express = require('express');
const router = express.Router();

// @route   GET  api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
  return res.send('Get all users contacts');
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
