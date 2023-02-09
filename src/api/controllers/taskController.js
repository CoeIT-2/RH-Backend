const {getTasks, createTask, updateTask, deleteTask, getTaskDetail} = require('../services/taskService')


const getHanlder = async (req,res)=> {
    const tasks= await getTasks(res)
    res.status(200).json({data:tasks})
}

const getDetailHanlder = async (req, res) => {
    const task = await getTaskDetail(req.params.id, res)
    res.status(200).json({data:task})
}

const postHandler=async (req,res)=> {
    const newTask = await createTask(req.body, res)
    res.status(200).json({message:`task ${req.body.title} created successfully`,data:newTask})
}

const updateHandler=async (req,res)=> {
    const updatedTask = await updateTask(req.params.id, req.body, res)
    res.status(200).send(updatedTask)
}

const deleteHandler= async (req,res)=> {
    const deletedTask = await deleteTask(req.params.id, res)
    res.status(200).json({message:`task deleted successfully`,data:deletedTask})
}




module.exports={getHanlder, getDetailHanlder, postHandler,deleteHandler,updateHandler}
