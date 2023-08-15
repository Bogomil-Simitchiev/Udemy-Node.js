const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post('/post', feedController.createPost);

// GET by id /feed/posts/:postId
router.get('/posts/:postId', feedController.getPost);


module.exports = router;