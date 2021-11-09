const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  user: {
    name: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.model('Posts' , PostSchema)