const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('We are at POST route' )
// })

router.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})
module.exports = router