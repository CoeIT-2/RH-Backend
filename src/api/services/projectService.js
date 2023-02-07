const projectModel = require('../models/project.js') 

const getProjects = async (res) => {   
    try {
        const projects = await projectModel.find()
        return projects
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the projects"});
    }    
}

const getProjectDetail = async (id, res) => {
    try {
        const project = await projectModel.findById(id)
        return project
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the project"});
    }    
}

const createProject = async (data,res) => {
    const newProject = new  projectModel(data) //data=req.body
    try {
        await newProject.save();
        return newProject
      } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
      }
}

const updateProject= async (id, data, res) => { // id + request body 
    try {
        const project= await projectModel.findByIdAndUpdate(id, data, {"new":true})
        await project.save()
        return project
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
        }
    
    
}
const deleteProject= async (id, res) => {
    try {
        const project= await projectModel.findByIdAndDelete(id)
        return project
    } catch {
        res.status(500).json({message:error.message});
    }
    
}

module.exports = {getProjects, createProject, updateProject, deleteProject, getProjectDetail}

