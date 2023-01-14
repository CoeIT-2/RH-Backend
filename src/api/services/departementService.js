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

const getDepartementDetail = async (name, res) => {
    try {
        const departement = await departementModel.findOne({"name":name}).exec()
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

const updateDepartement = async (name, data, res) => { // id + request body 
    try {
        const departement = await departementModel.findOneAndUpdate({name:name}, data, {returnDocument:'after'})
        return departement
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
        }
    
    
}
const deleteDepartement = async (name, res) => {
    try {
        const departement = await departementModel.findOneAndDelete({"name":name})
        return departement
    } catch {
        res.status(500).json({message:error.message});
    }
    
}

module.exports = {getDepartements, createDepartement, updateDepartement, deleteDepartement, getDepartementDetail}

