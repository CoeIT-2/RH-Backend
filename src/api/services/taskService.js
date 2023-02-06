const taskModel = require('../models/task.js') 
const memberModel = require('../models/member.js') 

const getTasks = async (res) => {   
    try {
        const tasks = await taskModel.find()
        return tasks
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the tasks"});
    }    
}

const getTaskDetail = async (id, res) => {
    try {
        const task = await taskModel.findById(id)
        return task
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the task"});
    }    
}

const createTask = async (data,res) => {
    const newTask = new  taskModel(data) //data=req.body
    try {
        await newTask.save();
        return newTask
      } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
      }
}

const updateTask = async (id, data, res) => { // id + request body 
    try {
        const task = await taskModel.findByIdAndUpdate(id, data, {"new":true})
        if (task.state != null && task.state == "Done"){
            const members = task.members

            
            var addPoints;
            if (task.difficulty == "Easy"){
                addPoints = 10;
            } else if (task.difficulty == "Normal") {
                addPoints = 30;
            } else {
                addPoints = 50;
            }
            
            for (let i=0; i < members.length; i++) {
                
                let member = await memberModel.findById(members[i])
                member.points = member.points + addPoints;
                member.save();
            }
        }
        await task.save()
        return task
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
        }
    
    
}
const deleteTask = async (id, res) => {
    try {
        const task = await taskModel.findByIdAndDelete(id)
        return task
    } catch {
        res.status(500).json({message:error.message});
    }
    
}

module.exports = {getTasks, createTask, updateTask, deleteTask, getTaskDetail}