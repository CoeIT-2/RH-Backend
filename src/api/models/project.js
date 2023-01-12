import { Schema, model } from "mongoose";

const projectSchema= Schema({
    name: {
        type: String,
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
    deadline: Date,
    
})

export default model('Project',projectSchema)