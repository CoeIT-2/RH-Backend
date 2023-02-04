const router= require('express').Router();
const {getHanlder,postHandler,updateHandler ,deleteHandler}= require('../controllers/memberController')
//get all members
router.get('/',getHanlder)
//add member
router.post('/',postHandler)
//update member by id
router.put('/:id', updateHandler)
//delete member by id
router.delete('/:id',deleteHandler)

module.exports= router
