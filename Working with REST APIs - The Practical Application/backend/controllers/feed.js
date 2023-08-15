let posts = [
  {
    _id: '1',
    title: 'First Post',
    content: 'This is the first post!',
    imageUrl: 'images/duck.jpg',
    creator: {
      name: 'Maximilian'
    },
    createdAt: new Date()
  },
  {
    _id: '2',
    title: 'Second Post',
    content: 'This is the second post!',
    imageUrl: 'images/duck.jpg',
    creator: {
      name: 'Maximilian'
    },
    createdAt: new Date()
  }
]

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};

exports.getPost = (req, res, next) => {
  const id = req.params.postId;
  const post = posts.find(p => p._id == id);

  res.status(200).json({ post });
};
