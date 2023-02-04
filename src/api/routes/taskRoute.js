const router= require('express').Router();
const {getHanlder,postHandler,updateHandler ,deleteHandler}= require('../controllers/taskController')
//get all tasks
router.get('/',getHanlder)
//add task
router.post('/',postHandler)
//update task by id
router.put('/:id', updateHandler)
//delete task by id
router.delete('/:id',deleteHandler)

module.exports= router
