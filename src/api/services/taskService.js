const taskModel = require('../models/task.js') 
const memberModel = require('../models/member.js')
const notificationModel = require('../models/notification.js')
const {getNotifications, createNotification, updateNotification, deleteNotification, getNotificationDetail} = require('../services/notificationService')

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

const  sendWarning = async (task, res) => {
    if(task.state == "On Going"){
        await createNotification({

            "notif_type" : "Warning",
            "title" : "You have less than 24 hours to complete your task!",
            "members" : task.members

        }, res)
    }
}
const  sendNotification = async (task, res) => {
        await createNotification({

            "notif_type" : "Notification",
            "title" : "You hvae a new task",
            "members" : task.members

        }, res)
    
}
const  sendWarningNotification = async (task, res) => {
    if(task.state == "On Going"){
        await createNotification({

            "notif_type" : "Warning",
            "title" : "You have a new task! and you have less than 24 hours to complete it!!",
            "members" : task.members

        }, res)
    }
}
const createTask = async (data,res) => {
    const newTask = new  taskModel(data) //data=req.body
    try {
        await newTask.save();
        const time = newTask.deadline.getTime() - Date.now();
        console.log("time is:" + time)
        if (time > 1000*3600*24) {
            sendNotification(newTask, res)
            setTimeout(sendWarning(newTask, res), time - (1000*3600*24))
        } else {
            sendWarningNotification(newTask, res)
        }
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