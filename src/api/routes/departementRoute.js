const router= require('express').Router();
const {getHanlder,postHandler,updateHandler ,deleteHandler, getDetailHanlder}= require('../controllers/departementController')



//get list
router.get('/',getHanlder)
//get detail
router.get('/:name',getDetailHanlder)
//add 
router.post('/',postHandler)
//update 
router.put('/:name', updateHandler)
//delete 
router.delete('/:name',deleteHandler)

module.exports= router
