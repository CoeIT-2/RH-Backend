const {getMembers, updateMember, deleteMember, getMemberDetail} = require('../services/memberService')


const getHanlder = async (req,res)=> {
    const members= await getMembers(res)
    res.status(200).json({data:members})
}

const getDetailHanlder = async (req, res) => {
    const member = await getMemberDetail(req.params.id, res)
    res.status(200).json({data:member})
}


const updateHandler=async (req,res)=> {
    const updatedMember = await updateMember(req.params.id, req.body, res)
    res.status(200).send(updatedMember)
}

const deleteHandler= async (req,res)=> {
    const deletedMember = await deleteMember(req.params.id, res)
    res.status(200).json({message:`member deleted successfully`,data:deletedMember})
}




module.exports={getHanlder, getDetailHanlder, deleteHandler,updateHandler}
