const express =  require('express');

const app = express()

// Server config
app.listen(8080)

// Middleware
app.use('/posts', ()=> {
  console.log('This is a middleware running');
})

// Routes
app.get('/', (req, res) => {
  res.send('We are on home')
})

app.get('/posts', (req, res) => {
  res.send('We are on Posts')
})