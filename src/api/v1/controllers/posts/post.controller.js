import Post from "../../models/post.model";

export class PostController {
  getAllPosts = async (req, res)=> {

    try {
    
      const lastPost = await Post.find();
  
      const objRes= {
        msg: 'Retrieve Last Post:..',
        lastPost
      }
      return res.json(objRes);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  
    //response.json({ message: 'Get All Posts OK' })
  }

  getPost = async (req, res)=>{

    const {id} = req.params;
  try {
    const dataPost = await Post.findOne({_id:id});

    //if (dataPost.titlePost) showDataPost(dataPost);

    const objRes= {
      msg: 'Retrieve Post By ID:..',
      dataPost,
      id
    }
    return res.json(objRes);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
    
    //return res.json({ message: 'Get Post OK' })
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

  updatePost = async (req, res)=> {
    const {id, urlImage, textPost, titlePost} = req.body;
    try {
      const editPost = await Post.findOneAndUpdate({_id:id},{urlImage:urlImage,textPost:textPost,titlePost:titlePost},{new: true});
      const objRes = {
        editPost,
        msg: "Post Actualizado con Exito"
      }
      return res.status(200).json(objRes)
    } catch (error) {
      return res.status(500).json(error)
    }
    //response.json({ message: 'Update Post OK' })
  }

  deletePost(request, response) {
    response.json({ message: 'Delete Post OK' })
  }
}

export default new PostController()