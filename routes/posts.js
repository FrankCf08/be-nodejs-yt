const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts)
    } catch (error) {
      res.json({ message: error })
    }
})

router.post('/', async (req, res) => {
  console.log(req.body);
  const post = new Post({
    user: {
      name: req.body.user.name,
      lastName: req.body.user.lastName
    },
    title: req.body.title,
    description: req.body.description
  });
  
  //Creatin Promise
  //1st Method
  // post.save()
  //     .then(data => {
  //       res.json(data)
  //     })
  //     .catch(error => {
  //       res.json({ message : error})
  //     })
  //2nd Method
  try {
    const postSave = await post.save();
    res.json(postSave)
  } catch (error) {
    res.json({ message: error })
  }
})
module.exports = router