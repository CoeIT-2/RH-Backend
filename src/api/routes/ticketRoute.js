const router= require('express').Router();
const {getHanlder, getDetailHanlder, postHandler,updateHandler ,deleteHandler}= require('../controllers/ticketController')
const {verifyToken} = require("../middlewares/authJwt.js")



//get list
router.get('/',[verifyToken], getHanlder)
//get detail
router.get('/:id',[verifyToken], getDetailHanlder)
//add 
router.post('/',[verifyToken], postHandler)
//update 
router.put('/:id', [verifyToken], updateHandler)
//delete 
router.delete('/:id', [verifyToken], deleteHandler)

module.exports= router