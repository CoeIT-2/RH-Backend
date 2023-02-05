const router= require('express').Router();
const { checkDuplicateUsernameOrEmail } = require("../middlewares/verifySignUp.js");
const {signupHandler, signinHandler}= require('../controllers/authController.js')




  router.post(
    "/signup",
    [ /*middlwares included*/
    checkDuplicateUsernameOrEmail,
    ], /*controller*/
    signupHandler
  );

  router.post("/signin", signinHandler);


  module.exports= router
