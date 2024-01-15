const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// @route   POST  api/users
// @desc    Register a user
// @access  Public
router.post('/', (req, res) => {
  return res.send('Register a user');
});

router.get('/', (req, res) => {
  return res.send('users');
});

module.exports = router;
