const router= require('express').Router();
const {getHanlder, getDetailHanlder, postHandler,updateHandler ,deleteHandler}= require('../controllers/projectController')
const {verifyToken} = require("../middlewares/authJwt.js")
const {checkIfHR, checkIfCoManager}= require('../middlewares/authorization.js')



//get list
router.get('/',[verifyToken], getHanlder)
//get detail
router.get('/:id',[verifyToken], getDetailHanlder)
//add 
router.post('/',[verifyToken, checkIfCoManager], postHandler)
//update 
router.put('/:id', [verifyToken, checkIfCoManager], updateHandler)
//delete 
router.delete('/:id', [verifyToken, checkIfCoManager], deleteHandler)

module.exports= router
