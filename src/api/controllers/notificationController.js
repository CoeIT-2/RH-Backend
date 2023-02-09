const {getNotifications, createNotification, updateNotification, deleteNotification, getNotificationDetail} = require('../services/notificationService')


const getHanlder = async (req,res)=> {
    const notifications= await getNotifications(res)
    res.status(200).json({data:notifications})
}

const getDetailHanlder = async (req, res) => {
    const notification = await getNotificationDetail(req.params.id, res)
    res.status(200).json({data:notification})
}

const postHandler=async (req,res)=> {
    const newNotification = await createNotification(req.body, res)
    res.status(200).json({message:`notification ${req.body.name} created successfully`,data:newNotification})
}

const updateHandler=async (req,res)=> {
    const updatedNotification = await updateNotification(req.params.id, req.body, res)
    res.status(200).send(updatedNotification)
}

const deleteHandler= async (req,res)=> {
    const deletedNotification = await deleteNotification(req.params.id, res)
    res.status(200).json({message:`notification deleted successfully`,data:deletedNotification})
}




module.exports={getHanlder, getDetailHanlder, postHandler,deleteHandler,updateHandler}
