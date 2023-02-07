const router= require('express').Router();
const {getHanlder,getDetailHanlder,postHandler,updateHandler ,deleteHandler}= require('../controllers/badgeController')
//get dadge
router.get('/:id',getDetailHanlder)
//get all dadges
router.get('/',getHanlder)
//add dadge
router.post('/',postHandler)
//update dadge by id
router.put('/:id', updateHandler)
//delete dadge by id
router.delete('/:id',deleteHandler)

module.exports= router
