/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
const express = require('express');

const router = express.Router();
const passport = require('passport');

const Post = require('../models/Post');
const validatePostInput = require('../validation/posts');

router.patch('/:id/like',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then((post) => {
        if (post.likes.includes(req.user.id)) {
          post.likes = post.likes.filter((id) => id != req.user.id);
          post.save();
          res.json(post);
        } else {
          post.likes.push(req.user.id);
          post.save();
          res.json(post);
        }
      })
      .catch((err) => res.status(404).json({ error: err }));
  });

router.get('/', (req, res) => {
  Post.find()
    .sort({ createdAt: 'desc' })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(404).json({ error: err }));
});

router.get('/user/:user_id', (req, res) => {
  Post.find({ 'user.id': req.params.user_id })
    .sort({ createdAt: 'desc' })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(404).json({ error: err }));
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newPost = new Post({
      user: {
        id: req.user.id,
        username: req.user.username,
      },
      text: req.body.text,
    });
    return newPost.save().then((post) => res.json(post));
  });

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.findOneAndDelete({ _id: req.params.id })
      .then((post) => {
        if (post === null) {
          res.status(400).json('No post found');
        } else {
          res.json('Post deleted!');
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

module.exports = router;
