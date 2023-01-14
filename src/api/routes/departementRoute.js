const router= require('express').Router();
const {getHanlder,postHandler,updateHandler ,deleteHandler, getDetailHanlder}= require('../controllers/departementController')



//get list
router.get('/',getHanlder)
//get detail
router.get('/:id',getDetailHanlder)
//add 
router.post('/',postHandler)
//update 
router.put('/:id', updateHandler)
//delete 
router.delete('/:id',deleteHandler)

module.exports= router
