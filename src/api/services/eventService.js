const eventModel = require('../models/event.js') 

const getEvents = async (res) => {   
    try {
        const events = await eventModel.find()
        return events
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the events"});
    }    
}

const getEventDetail = async (id, res) => {
    try {
        const event = await eventModel.findById(id)
        return event
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the event"});
    }    
}

const createEvent = async (data,res) => {
    const newevent = new  eventModel(data) //data=req.body
    try {
        await newevent.save();   
        return newevent    
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
    }
      
}

const updateEvent = async (id, data, res) => { // id + request body 
    try {
        const event = await eventModel.findByIdAndUpdate(id, data, {"new":true})
        await event.save()
        return event
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
        }
    
    
}
const deleteEvent = async (id, res) => {
    try {
        const event = await eventModel.findByIdAndDelete(id)
        return event
    } catch {
        res.status(500).json({message:error.message});
    }
    
}

module.exports = {getEvents, createEvent, updateEvent, deleteEvent, getEventDetail}

