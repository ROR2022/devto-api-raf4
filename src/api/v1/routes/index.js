import userRouter from './user.router'
import postRouter from './post.router'
import loginRouter from '../controllers/login/login'

export default function routes(app) {
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/posts', postRouter);
  // app.use('/api/v1/login', loginRouter);
}
