const express =  require('express')
const router = express.Router();

router.get('/', (req, res)=>{
  res.send('We are on GET routes')
})

router.get('/specific', (req, res)=>{
  res.send('We are on GET routes /specific')
})

module.exports = router