const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../models/Post');
const User = require('../models/User');
const validatePostInput = require('../validation/posts');

router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

router.get('/user/:user_id', (req, res) => {
    Post.find({ "user.id": req.params.user_id })
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'User not found' }));
    
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
                username: req.user.username
            },
            text: req.body.text,
        });
        newPost.save().then(post => res.json(post));
    }
);

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Post.findOneAndDelete({ _id: req.params.id })
            .then(post => {
                if (post === null) {
                    res.status(400).json('No post found');
                } else {
                    res.json('Post deleted!');
                }
            })
            .catch(err => {
                res.status(400).json('No post found');
            });
    }
)

module.exports = router;