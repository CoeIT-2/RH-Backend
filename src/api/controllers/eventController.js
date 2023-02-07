const {getEvents, createEvent, updateEvent, deleteEvent, getEventDetail} = require('../services/eventService.js')

const getHanlder = async (req,res)=> {
    const events= await getEvents(res)
    res.status(200).json({data:events})
}

const getDetailHanlder = async (req, res) => {
    const event = await getEventDetail(req.params.id, res)
    res.status(200).json({data:event})
}

const postHandler=async (req,res)=> {
    const newEvent = await createEvent(req.body, res)
    res.status(200).json({message:`Event ${req.body.name} created successfully`,data:newEvent})
}

const updateHandler=async (req,res)=> {
    const updatedEvent = await updateEvent(req.params.id, req.body, res)
    res.status(200).send(updatedEvent)
}

const deleteHandler= async (req,res)=> {
    const deletedEvent = await deleteEvent(req.params.id, res)
    res.status(200).json({message:`Event deleted successfully`,data:deletedEvent})
}




module.exports={getHanlder, getDetailHanlder, postHandler,deleteHandler,updateHandler}
