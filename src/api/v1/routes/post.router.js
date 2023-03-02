import * as express from 'express';
import PostController from '../controllers/posts/post.controller'

export default express
  .Router()
  .get('/', PostController.getAllPosts)
  .post('/', PostController.createPost)
  .get('/:id', PostController.getPost)
  .put('/:id', PostController.updatePost)
  .delete('/:id', PostController.deletePost)