const ticketModel = require('../models/ticket.js') 

const getTickets = async (res) => {   
    try {
        const tickets = await ticketModel.find()
        return tickets
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the tickets"});
    }    
}

const getTicketDetail = async (id, res) => {
    try {
        const ticket = await ticketModel.findById(id)
        return ticket
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the ticket"});
    }    
}

const createTicket = async (data,res) => {
    const newticket = new  ticketModel({
        member: data.member,
        discordIssue: data.discordIssue,
        personalInfoError: data.personalInfoError,
        changeDepartementTo: data.changeDepartementTo
    }) //data=req.body
    try {
        await newticket.save();   
        return newticket    
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
    }
      
}

const updateTicket = async (id, data, res) => { // id + request body 
    try {
        const ticket = await ticketModel.findByIdAndUpdate(id, {
            discordIssue: data.discordIssue,
            personalInfoError: data.personalInfoError,
            changeDepartementTo: data.changeDepartementTo
        }, {"new":true})
        await ticket.save()
        return ticket
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
        }
    
    
}
const deleteTicket = async (id, res) => {
    try {
        const ticket = await ticketModel.findByIdAndDelete(id)
        return ticket
    } catch {
        res.status(500).json({message:error.message});
    }
    
}

module.exports = {getTickets, createTicket, updateTicket, deleteTicket, getTicketDetail}

