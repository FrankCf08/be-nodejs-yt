const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('We are at POST route' )
})

module.exports = router