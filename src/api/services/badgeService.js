const badgeModel = require('../models/badge.js') 

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

const createBadge = async (data,res) => {
    const newBadge = new  badgeModel(data) //data=req.body
    try {
        await newBadge.save();
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