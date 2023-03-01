import Post from "../models/post.model.js";

export class PostController {
  getAllPosts(request, response) {
    response.json({ message: 'Get All Posts OK' })
  }

  getPost = async (req, res)=>{

    
    return res.json({ message: 'Get Post OK' })
  }

  createPost = async(req, res)=>{
    const dataPost = req.body;
  try {
    const newPost = new Post(dataPost);
    await newPost.save();

    const objRes= {
      msg: 'Creando un post:..',
      dataPost,
      newPost
    }
    //console.log(objRes);
    return res.json(objRes);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
    //response.json({ message: 'Create Post OK' })
  }

  updatePost(request, response) {
    response.json({ message: 'Update Post OK' })
  }

  deletePost(request, response) {
    response.json({ message: 'Delete Post OK' })
  }
}

export default new PostController()