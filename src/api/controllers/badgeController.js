const {getBadges, createBadge, updateBadge, deleteBadge, getBadgeDetail} = require('../services/badgeService')


const getHanlder = async (req,res)=> {
    const badges= await getBadges(res)
    res.status(200).json({data:badges})
}

const getDetailHanlder = async (req, res) => {
    const badge = await getBadgeDetail(req.params.id, res)
    res.status(200).json({data:badge})
}

const postHandler=async (req,res)=> {
    const newBadge = await createBadge(req.body, res)
    res.status(200).json({message:`badge ${req.body.name} created successfully`,data:newBadge})
}

const updateHandler=async (req,res)=> {
    const updatedBadge = await updateBadge(req.params.id, req.body, res)
    res.status(200).send(updatedBadge)
}

const deleteHandler= async (req,res)=> {
    const deletedBadge = await deleteBadge(req.params.id, res)
    res.status(200).json({message:`badge deleted successfully`,data:deletedBadge})
}




module.exports={getHanlder, getDetailHanlder, postHandler,deleteHandler,updateHandler}
