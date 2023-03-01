import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  avatarUrl: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
}, { 
  timestamps: true
})

export default mongoose.model('User', userSchema)

