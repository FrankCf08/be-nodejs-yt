const express =  require('express');
const mongoose =  require('mongoose')
const app = express()

// Server config
app.listen(8080)

// Connect to DB
mongoose.connect(`${process.env.DB_CONNECTION}`, ()=> {
  console.log('Connected to DB');
})

// Routes
app.get('/', (req, res) => {
  res.send('We are on home')
})

app.get('/posts', (req, res) => {
  res.send('We are on Posts')
})