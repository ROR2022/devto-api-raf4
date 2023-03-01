export class PostController {
  getAllPosts(request, response) {
    response.json({ message: 'Get All Posts OK' })
  }

  getPost(request, response) {
    response.json({ message: 'Get Post OK' })
  }

  createPost(request, response) {
    response.json({ message: 'Create Post OK' })
  }

  updatePost(request, response) {
    response.json({ message: 'Update Post OK' })
  }

  deletePost(request, response) {
    response.json({ message: 'Delete Post OK' })
  }
}

export default new PostController()