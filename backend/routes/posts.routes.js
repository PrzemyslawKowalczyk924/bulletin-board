const express = require('express');
const Post = require('../models/post.model');
const router = express.Router();

router.get('/posts', async (req, res) => {
  try {
    const result = await Post
      .find({status: 'published'})
      .select('author created title photo')
      .sort({created: -1});
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/posts/add', async (req, res) => {
  const { author, created, updated, status, title, text, price, phone, location } = req.fields;
  const photo = req.files.photo;
  const fileName = photo.path.split('/').slice(-1)[0];
  try {
    const newPost = new Post({ 
      author: author, created: created, 
      updated: updated, status: status, 
      title: title, text: text, 
      photo: fileName, price: price, 
      phone: phone, location: location });
    await newPost.save();
    res.json(newPost);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
