const notificationModel = require('../models/notification.js') 

const getNotifications = async (res) => {   
    try {
        const notifications = await notificationModel.find()
        return notifications
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the notifications"});
    }    
}

const getNotificationDetail = async (id, res) => {
    try {
        const notification = await notificationModel.findById(id)
        return notification
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the notification"});
    }    
}

const createNotification = async (data,res) => {
    const newNotification = new  notificationModel(data) //data=req.body
    try {
        await newNotification.save();
        return newNotification
      } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
      }
}

const updateNotification = async (id, data, res) => { // id + request body 
    try {
        const notification = await notificationModel.findByIdAndUpdate(id, data, {"new":true})
        await notification.save()
        return notification
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
        }
    
    
}
const deleteNotification = async (id, res) => {
    try {
        const notification = await notificationModel.findByIdAndDelete(id)
        return notification
    } catch {
        res.status(500).json({message:error.message});
    }
    
}

module.exports = {getNotifications, createNotification, updateNotification, deleteNotification, getNotificationDetail}