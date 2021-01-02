/* eslint-disable no-shadow */
const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const User = require('../models/User');

router.post('/register', async (req, res) => {
  const error = validateRegisterInput(req.body);

  if (error) {
    return res.status(400).json({error});
  }

  const user = await User.findOne({ email: req.body.email })
    if (user) {
      const error = 'User already exists';
      return res.status(400).json({error});
    }
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then((user) => {
          const payload = { id: user.id, email: user.email };

          return jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`,
            });
          });
        })
        .catch((err) => err);
    });
  });
});

router.post('/login', async (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  const error = validateLoginInput(req.body);

  if (error) {
    return res.status(400).json({error});
  }

  const user = await User.findOne({ email: email })

  if (!user) {
    return res.status(400).json({error: 'Email or password is incorrect'});
  }

  const isMatch = await  bcrypt.compare(password, user.password)

  if (isMatch) {
    const payload = { id: user.id, email: user.email, username: user.username };

    return jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
      res.json({
        success: true,
        token: `Bearer ${token}`,
      });
    });
  }

  return res.status(400).json({error: 'Email or password is incorrect'})
});

module.exports = router;
