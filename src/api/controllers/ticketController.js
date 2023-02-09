const {getTickets, createTicket, updateTicket, deleteTicket, getTicketDetail} = require('../services/ticketService.js')

const getHanlder = async (req,res)=> {
    const Tickets= await getTickets(res)
    res.status(200).json({data:Tickets})
}

const getDetailHanlder = async (req, res) => {
    const Ticket = await getTicketDetail(req.params.id, res)
    res.status(200).json({data:Ticket})
}

const postHandler=async (req,res)=> {
    const newTicket = await createTicket(req.body, res)
    res.status(200).json({message:`Ticket ${req.body.name} created successfully`,data:newTicket})
}

const updateHandler=async (req,res)=> {
    const updatedTicket = await updateTicket(req.params.id, req.body, res)
    res.status(200).json({data:updatedTicket})
}

const deleteHandler= async (req,res)=> {
    const deletedTicket = await deleteTicket(req.params.id, res)
    res.status(200).json({message:`Ticket deleted successfully`,data:deletedTicket})
}




module.exports={getHanlder, getDetailHanlder, postHandler,deleteHandler,updateHandler}
