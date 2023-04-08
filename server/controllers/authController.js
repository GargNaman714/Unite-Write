const User = require('../models/user')

const createUser = async (req, res) => {
  try {
    const { name, email, profilePic } = req.body //from client side we will be sending name,email using -> http.post('localhost:3001/api/signup',body:{'name':name,'email':email,'profilePic;"profilePic"})
    console.log(name, email, profilePic)
    //check if email already exists
    let user = await User.findOne({ email })
    if (!user) {
      user = new User({
        email,
        profilePic,
        name
      })
      console.log(`second user : ${user}`)

      user = await user.save() //getting back the user stored in mongoDB coz mongoDB will also create a property named -> '_id' and we need that, its very useful
    }
    res.json({ user })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

module.exports = {
  createUser
}
