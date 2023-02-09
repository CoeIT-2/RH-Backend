const User = require('../models/member.js') 
const Departement = require('../models/departement.js') 


const checkIfSuperuser = async (req, res, next) => { //for actions permitted for any previlleged user
    try {
        const rhDep = await Departement.findOne({name:"HR"})._id
        const user = await User.findById(req.userId)
        if (user.roles.length() == 1 && user.roles.includes("Member") && (user.departement!=rhDep)) {
            res.status(401).send({ message: "Unauthorized" });        
     } 
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const checkIfHR = async (req, res, next) => { //for actions only permited for HR
    try {
    const rhDep = await Departement.findOne({name:"HR"})
    const id = rhDep._id
        console.log(id)
    const user = await User.findById(req.userId)
        console.log(user.departement)
    if (user.departement.equals(id)) {
        next()
        
    } else {
        res.status(401).send({ message: "Unauthorized" });
        }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}


const checkIfCoManager = async (req, res, next) => { //for actions only permited for Co-Managers
    try {
        const user = await User.findById(req.userId)
        if (!user.roles.includes("Co-Manager")) {
            res.status(401).send({ message: "Unauthorized" });
        } else {
            next()
            }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}



module.exports={checkIfHR, checkIfCoManager, checkIfSuperuser}
