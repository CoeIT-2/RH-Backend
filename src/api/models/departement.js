const mongoose = require('mongoose');

const departementSchema= mongoose.Schema({
    name: {
        type: String,
        unique:true,
        required:[true,'please specify the name of the departement']
    },
    description: {
        type: String,
    },
    members:{type:[mongoose.SchemaTypes.ObjectId],ref:'Member'},
    projects:{type:[mongoose.SchemaTypes.ObjectId],ref:'Project'}
})

module.exports = mongoose.model('Departement',departementSchema)
