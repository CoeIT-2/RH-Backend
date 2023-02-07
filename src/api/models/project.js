const mongoose = require('mongoose');

const projectSchema= mongoose.Schema({
    name: {
        type: String,
        unique:true,
        required:[true,'please specify the name of the project']
    },
    description: {
        type: String,
        required:[true,'please provide a description for the project']
    },
    status: {
        type: String,
        default:'On going',
        enum:{
            values: ['On going','On hold','Closed'],
            message: "{VALUE} is not a valid project's status, possible values : On going, On hold, Closed"}
    },
    deadline: {type: Date},
    participants:{type:[mongoose.SchemaTypes.ObjectId],ref:'Member'},
    
})

module.exports = mongoose.model('Project',projectSchema)