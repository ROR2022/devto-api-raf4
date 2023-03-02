import * as express from 'express';
import UserController from '../controllers/users/user.controller'

export default express
  .Router()
  .get('/', UserController.getAllUsers)
  .post('/', UserController.createUser)
  .post('/login', UserController.loginUser)
  .get('/:id', UserController.getUser)
  .patch('/:id', UserController.updateUser)
  .delete('/:id', UserController.deleteUser)
  