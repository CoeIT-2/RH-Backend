const router= require('express').Router();
const {getHanlder, getDetailHanlder ,updateHandler ,deleteHandler}= require('../controllers/memberController')
const {verifyToken} = require("../middlewares/authJwt.js")
const {checkIfHR}= require('../middlewares/authorization.js')

//get member
router.get('/:id',getDetailHanlder)
//get all members
router.get('/',[verifyToken],getHanlder)
//update member by id
router.put('/:id',[verifyToken, checkIfHR], updateHandler)
//delete member by id
router.delete('/:id',[verifyToken, checkIfHR], deleteHandler)

module.exports= router
