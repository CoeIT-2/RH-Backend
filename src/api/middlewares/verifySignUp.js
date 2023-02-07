const User = require('../models/member.js') 


const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({ /*check whether the username is already taken by another user*/
    username: req.body.username /*get the username from the request's body*/
  }).exec((err, user) => { 
    if (err) { /*send 500 code status if internal servor error (err!=NULL) */
      res.status(500).send({ message: err });
      return;
    }

    if (user) { /*if user with given username found, send a message*/
      res.status(400).send({ message: "User with given username already exists" });
      return;
    }

    // Email
    User.findOne({ /*check whether the email is already taken by another user*/
      email: req.body.email /*get the email from the request's body*/
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "User with given email already exists" });
        return;
      }

      next(); /*execute the upcoming middlware*/
    });
  });
};



module.exports={checkDuplicateUsernameOrEmail}
