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

const getProjectDetail = async (name, res) => {
    try {
        const project = await projectModel.findOne({"name":name}).exec()
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

const updateProject= async (name, data, res) => { // id + request body 
    try {
        const project= await projectModel.findOneAndUpdate({name:name}, data, {returnDocument:'after'})
        return project
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
        }
    
    
}
const deleteProject= async (name, res) => {
    try {
        const project= await projectModel.findOneAndDelete({"name":name})
        return project
    } catch {
        res.status(500).json({message:error.message});
    }
    
}

module.exports = {getProjects, createProject, updateProject, deleteProject, getProjectDetail}

