const badgeModel = require('../models/badge.js') 
const memberModel = require('../models/member.js')
const {getNotifications, createNotification, updateNotification, deleteNotification, getNotificationDetail} = require('../services/notificationService')


const getBadges = async (res) => {   
    try {
        const badges = await badgeModel.find()
        return badges
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the badges"});
    }    
}

const getBadgeDetail = async (id, res) => {
    try {
        const badge = await badgeModel.findById(id)
        return badge
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the badge"});
    }    
}

const sendNotification = async(badge,res)=>{
    
        await createNotification({

            "notif_type" : "Notification",
            "title" : "Congrats!! You accquired a new badge",
            "members" : badge.members

        }, res)
    
}
const createBadge = async (data,res) => {
    const newBadge = new  badgeModel(data) //data=req.body
    try {
        await newBadge.save();
        sendNotification(newBadge, res)
        return newBadge
      } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
      }
}

const updateBadge = async (id, data, res) => { // id + request body 
    try {
        const badge = await badgeModel.findByIdAndUpdate(id, data, {"new":true})
        await badge.save()
        return badge
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
        }
    
    
}
const deleteBadge = async (id, res) => {
    try {
        const badge = await badgeModel.findByIdAndDelete(id)
        return badge
    } catch {
        res.status(500).json({message:error.message});
    }
    
}

module.exports = {getBadges, createBadge, updateBadge, deleteBadge, getBadgeDetail}