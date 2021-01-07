/* eslint-disable eqeqeq */
const express = require('express');

const router = express.Router();
const passport = require('passport');

const Post = require('../models/Post');
const validatePostInput = require('../validation/posts');
const validateCommentInput = require('../validation/comment');

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

router.patch('/:id/comment',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    console.log(req);
      const error = validateCommentInput(req.body.text)

      if (error) {
        return res.status(404).json(error)
      }

      try {
        const post = await Post.findById(req.params.id)
        
        post.comments.push({
          user_id: req.user.id,
          username: req.user.username,
          text: req.body.text,
        });
        await post.save();
        return res.json(post.comments);
      } catch (e) {
        return res.status(400).json({error: "comments had an issue"})
      }
  });

router.get('/', (req, res) => {
  Post.find()
    .sort({ createdAt: 'desc' })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json({ error: err }));
});

router.get('/user/:user_id', (req, res) => {
  Post.find({ 'user.id': req.params.user_id })
    .sort({ createdAt: 'desc' })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json({ error: err }));
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const error = validatePostInput(req.body);
    
    if (error) {
      return res.status(400).json({error});
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
          res.status(404).json('No post found');
        } else {
          res.json('Post deleted!');
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

module.exports = router;
