const User = require('../models/member.js') 
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const config = require("../../config/auth.config.js");


const createUser = async (req,res) => {
    const user = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone =! null ? req.body.phone : null,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        roles: req.body.roles
      });
      
    try {
        await user.save();
        return user
      } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
      }
}


const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username,});

    if (!user) {
      return res.status(404).send({ message: "User with given username doesn't exist." });
    }

    const passwordIsValid = bcrypt.compareSync( /*compare given password with the user's password*/
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Invalid Password.",
      });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, /* 24 hours*/
    });



    return {
      id: user.id,
      username: user.username,
      email: user.email,
      roles: user.roles,
      token: token
    };
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};


module.exports = {createUser, loginUser}
