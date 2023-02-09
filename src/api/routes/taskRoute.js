const router= require('express').Router();
const {getHanlder, getDetailHanlder, postHandler,updateHandler ,deleteHandler}= require('../controllers/departementController')
const {verifyToken} = require("../middlewares/authJwt.js")
const {checkIfHR, checkIfSuperuser}= require('../middlewares/authorization.js')




//get list
router.get('/',[verifyToken], getHanlder)
//get detail
router.get('/:id',[verifyToken], getDetailHanlder)
//add 
router.post('/',[verifyToken, checkIfSuperuser], postHandler)
//update 
router.put('/:id', [verifyToken, checkIfSuperuser], updateHandler)
//delete 
router.delete('/:id',[verifyToken, checkIfSuperuser], deleteHandler)

module.exports= router