const jwt = require("jsonwebtoken");
const config = require("../../config/auth.config.js");
const User = require('../models/member.js') 


const verifyToken = (req, res, next) => {
  let authorization = req.headers.authorization 
  

  if (!authorization) { /*authorization not specified in headers*/
    return res.status(403).send({ message: "Unauthorized. No token provided." }); 
  }

  let token = authorization.split(' ')[1];
  /*headers: {Authorization: "Bearer <token>*} 
   we extract the <token part from the request headers */

  jwt.verify(token, config.secret, (err, decoded) => { /*decrypt jwt*/
    if (err) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    req.userId = decoded.id; /*get id from decrypted token*/
    next(); /*execute upcoming middlware*/
  });
};



module.exports={verifyToken}
