const User = require('../models/member.js') 
const Departement = require('../models/departement.js') 


const checkIfHR = async (req, res, next) => {
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


const checkIfCoManager = async (req, res, next) => {
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



module.exports={checkIfHR, checkIfCoManager}
