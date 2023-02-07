const departementModel = require('../models/departement.js') 

const getDepartements = async (res) => {   
    try {
        const departements = await departementModel.find()
        return departements
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the departements"});
    }    
}

const getDepartementDetail = async (id, res) => {
    try {
        const departement = await departementModel.findById(id)
        return departement
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the departement"});
    }    
}

const createDepartement = async (data,res) => {
    const newDepartement = new  departementModel(data) //data=req.body
    try {
        await newDepartement.save();
        return newDepartement
      } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
      }
}

const updateDepartement = async (id, data, res) => { // id + request body 
    try {
        const departement = await departementModel.findByIdAndUpdate(id, data, {"new":true})
        await departement.save()
        return departement
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
        }
    
    
}
const deleteDepartement = async (id, res) => {
    try {
        const departement = await departementModel.findByIdAndDelete(id)
        return departement
    } catch {
        res.status(500).json({message:error.message});
    }
    
}

module.exports = {getDepartements, createDepartement, updateDepartement, deleteDepartement, getDepartementDetail}

