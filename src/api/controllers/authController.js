const User = require('../models/member.js') 

const {createUser, loginUser} = require('../services/authService.js')



/************ signup controller */
const signupHandler=async (req,res)=> {
    const newUser = await createUser(req, res)
    res.status(200).json({message:`User ${newUser.username} created successfully`,data:newUser})
}

/************ signin controller */

const signinHandler=   async (req,res)=> {
    const userData =  await loginUser(req, res)
    res.status(200).json({message:"User loged in successfully.",data:userData})
}

module.exports={signupHandler, signinHandler}

