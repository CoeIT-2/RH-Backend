const {getDepartements, createDepartement, updateDepartement, deleteDepartement, getDepartementDetail} = require('../services/departementService')

const getHanlder = async (req,res)=> {
    const departements= await getDepartements(res)
    res.status(200).json({data:departements})
}

const getDetailHanlder = async (req, res) => {
    const departement = await getDepartementDetail(req.params.name, res)
    res.status(200).json({data:departement})
}

const postHandler=async (req,res)=> {
    const newDepartement = await createDepartement(req.body, res)
    res.status(200).json({message:`departement ${req.body.name} created successfully`,data:newDepartement})
}

const updateHandler=async (req,res)=> {
    const updatedDepartement = await updateDepartement(req.params.name, req.body, res)
    res.status(200).send(updatedDepartement)
}

const deleteHandler= async (req,res)=> {
    const deletedDepartement = await deleteDepartement(req.params.name, res)
    res.status(200).json({message:`departement "${req.params.name}" deleted successfully`,data:deletedDepartement})
}




module.exports={getHanlder, getDetailHanlder, postHandler,deleteHandler,updateHandler}
