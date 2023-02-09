const router= require('express').Router();
const {getHanlder,getDetailHanlder,postHandler,updateHandler ,deleteHandler}= require('../controllers/notificationController')
//get notification
router.get('/:id',getDetailHanlder)
//get all notifications
router.get('/',getHanlder)
//add notification
router.post('/',postHandler)
//update notification by id
router.put('/:id', updateHandler)
//delete notification by id
router.delete('/:id',deleteHandler)

module.exports= router
