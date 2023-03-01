import User from "../../models/user"

export class UserController {
   getAllUsers = async (req, res)=> {
    try {
      const users = await User.find({})
  
      res.status(200).send(users)
    } catch(error) {
      console.error(error)
    }
    // response.json({ message: 'Get All Users OK' })
  }

  getUser= async (req, res)=> {
    try {
      const { id } = req.params // se obtiene de la url de la peticion
      const user = await User.findById(id)
  
      if (!user) {
        res.status(404).send({ 
          error: 'No se encontro ningún registro en la base de datos'
        })
      }
  
      res.status(200).send(user)
    } catch(error) {
      console.log(error)
    }
    // response.json({ message: 'Get User OK' })
  }

  createUser= async (req, res)=> {
    try {
      // obtenemos los datos de la solicitud
      const { avatarUrl,name,  email, password } = req.body
      // preparamos los datos que vienen del cliente en nuestro modelo
      const newUser = new User({
        avatarUrl,
        name,
        email,
        password
      })
      // salvamos en nuestra base de datos
      await newUser.save()
      // enviamos la respuesta al cliente
      res.status(201).send(newUser)
  
    } catch(error) {
      console.error(error)
    }
    // response.json({ message: 'Create User OK' })
  }

  updateUser= async (req, res)=> {
    try {
      const { id } = req.params
      const bodyParams = { ...req.body }
  
      const updatedUser = await User.findByIdAndUpdate(id, bodyParams, { new: true })
  
      res.status(201).send(updatedUser)
    } catch(error) {
      console.log(error)
    }
    // response.json({ message: 'Update User OK' })
  }

  deleteUser= async (req, res)=> {
    try {
      const { id } = req.params
      const deletedUser = await User.findByIdAndDelete(id)
      
      if (!deletedUser) {
        res.status(404).send({ 
          error: 'No se encontro ningún registro en la base de datos'
        })
      }
      
      res.status(200).send({ message: 'Registro eliminado correctamente'});
    } catch (error) {
      console.log(error)
    }
    // response.json({ message: 'Delete User OK' })
  }
}

export default new UserController()