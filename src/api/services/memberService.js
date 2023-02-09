const memberModel = require('../models/member.js') 

const getMembers = async (res) => {   
    try {
        const members = await memberModel.find()
        return members
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the members"});
    }    
}

const getMemberDetail = async (id, res) => {
    try {
        const member = await memberModel.findById(id)
        return member
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the member"});
    }    
}


const updateMember = async (id, data, res) => { // id + request body 
    try {
        const member = await memberModel.findByIdAndUpdate(id, data, {"new":true})
        await member.save()
        return member
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
        }
    
    
}
const deleteMember = async (id, res) => {
    try {
        const member = await memberModel.findByIdAndDelete(id)
        return member
    } catch {
        res.status(500).json({message:error.message});
    }
    
}

module.exports = {getMembers, updateMember, deleteMember, getMemberDetail}