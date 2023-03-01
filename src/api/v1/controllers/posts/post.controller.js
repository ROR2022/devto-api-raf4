import Post from "../../models/post.model";

export class PostController {
  getAllPosts = async (req, res)=> {

    try {
    
      const lastPost = await Post.find().limit(4).sort({$natural:-1});
  
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

  updatePost(request, response) {
    response.json({ message: 'Update Post OK' })
  }

  deletePost(request, response) {
    response.json({ message: 'Delete Post OK' })
  }
}

export default new PostController()