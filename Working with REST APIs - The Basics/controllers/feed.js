function generateRandomId(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}

let posts = [{ _id: '1234567890', title: 'First Post', content: 'This is the first post!' }]

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const randomId = generateRandomId(10); // Generate a random ID of length 10

  // Create post in db
  posts.push({ _id: randomId, title, content })
  res.status(201).json({
    message: 'Post created successfully!',
    post: { _id: randomId, title: title, content: content }
  });
};

exports.deletePost = (req, res, next) => {

  const id = req.params.id;
  posts = posts.filter(p => p._id != id);
  // delete post in db
  console.log(id)
  res.status(200).json({
    message: 'Post deleted successfully!',
  });
};