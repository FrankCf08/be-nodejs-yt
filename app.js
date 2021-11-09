const express =  require('express');
const mongoose =  require('mongoose')
const app = express()

require('dotenv/config')

const postsRouter = require('./routes/posts') // Post Router
const getsRouter = require('./routes/gets') // Get Router

// Server config
app.listen(8080)

// Connect to DB
mongoose.connect(
  `${process.env.DB_CONNECTION}`, 
  { useNewUrlParser: true }, 
  (err) => {
    if(err) {
        console.log('Some problem with the connection ' + err);
    } else {
        console.log('The Mongoose connection is ready');
    }
  }
)

// Middleware
app.use('/posts', postsRouter)
app.use('/gets', getsRouter)

// Routes
app.get('/', (req, res) => {
  res.send('We are on home')
})

app.get('/posts', (req, res) => {
  res.send('We are on Posts')
})