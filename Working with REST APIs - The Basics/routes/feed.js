const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post('/post', feedController.createPost);

// DELETE /feed/post/:id
router.delete('/post/:id', feedController.deletePost);


module.exports = router;