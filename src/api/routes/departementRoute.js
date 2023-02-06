const router= require('express').Router();
const {getHanlder,postHandler,updateHandler ,deleteHandler, getDetailHanlder}= require('../controllers/departementController')
const {verifyToken} = require("../middlewares/authJwt.js")
const {checkIfHR}= require('../middlewares/authorization.js')



//get list
router.get('/',[verifyToken], getHanlder)
//get detail
router.get('/:id',[verifyToken], getDetailHanlder)
//add 
router.post('/',[verifyToken, ], postHandler)
//update 
router.put('/:id', [verifyToken, checkIfHR], updateHandler)
//delete 
router.delete('/:id',[verifyToken, checkIfHR], deleteHandler)

module.exports= router
