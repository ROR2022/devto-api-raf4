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
  }
})

export default mongoose.model('Post', postSchema)