const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Get all the POSTS
router.get('/', async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts)
    } catch (error) {
      res.json({ message: error })
    }
})

// GET an speficic POST
// id: 618b326d1e7644de3f9d598b, 618b33bb6a2f4940a0cf0a88
router.get('/:id' , async(req, res) => {
  try {
    // console.log(req.params.id);
    // res.json({ id: req.params.id })
    const postById = await Post.findById(req.params.id);
    res.json(postById)
  } catch (error) {
    res.json({ message: error})
  }
})

// SUbmit a POSTS
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