import mongoose from "mongoose";



const postSchema= new mongoose.Schema({
  urlImage:{
    type: String,
    trim: true
  },
  titlePost:{
    type: String,
    trim: true
  },
  textPost:{
    type: String,
    trim: true
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

})

export default mongoose.model('Post', postSchema)