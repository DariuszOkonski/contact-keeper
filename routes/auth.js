const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route   GET  api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
  return res.send('get');
});

// @route   POST  api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/', (req, res) => {
  return res.send('auth');
});

module.exports = router;
