/* eslint-disable no-shadow */
const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const User = require('../models/User');

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  return User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = 'User already exists';
      return res.status(400).json(errors);
    }
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    return bcrypt.genSalt(10, (err, salt) => {
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
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email } = req.body;
  const { password } = req.body;

  return User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = 'This user does not exist';
      return res.status(400).json(errors);
    }

    return bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, email: user.email, username: user.username };

        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: `Bearer ${token}`,
          });
        });
      }
    });
  });
});

module.exports = router;
