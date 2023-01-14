const {getProjects, createProject, updateProject, deleteProject, getProjectDetail} = require('../services/projectService.js')

const getHanlder = async (req,res)=> {
    const projects= await getProjects(res)
    res.status(200).json({data:projects})
}

const getDetailHanlder = async (req, res) => {
    const project = await getProjectDetail(req.params.name, res)
    res.status(200).json({data:project})
}

const postHandler=async (req,res)=> {
    const newProject = await createProject(req.body, res)
    res.status(200).json({message:`Project ${req.body.name} created successfully`,data:newProject})
}

const updateHandler=async (req,res)=> {
    const updatedProject = await updateProject(req.params.name, req.body, res)
    res.status(200).json({data:updatedProject})
}

const deleteHandler= async (req,res)=> {
    const deletedProject = await deleteProject(req.params.name, res)
    res.status(200).json({message:`Project "${req.params.name}" deleted successfully`,data:deletedProject})
}




module.exports={getHanlder, getDetailHanlder, postHandler,deleteHandler,updateHandler}
