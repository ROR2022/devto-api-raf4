// const bcrypt = require('bcrypt')
// const loginRouter = require('express').Router()
// const User = require('../../models/user')

// loginRouter.post('/', async(req, res)=>{
//     const {body} = req
//     const { email, password } = body

//     const user = await User.findOne({email})
//     const passwordCorrect = user === null
//     ? false
//     : await bcrypt.compare(password, user.passwordHash)

//     if(!passwordCorrect){
//         res.status(401).json({message: 'Invalid credentials'})
//     }
//     res.send({
//         email: User.email,
//     })
// })

// export default loginRouter