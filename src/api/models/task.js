const mongoose= require('mongoose');
const Member = require('./member')

const Schema = mongoose.Schema;


const taskSchema= new Schema({

    title: {type: String, 
        required:[true,'title is required']
    },
    decription: String,
    deadline: {type: Date, 
        required:[true,'deadline is required']
    },
    difficulty: {
        type: String,
        enum: ["Easy", "Normal", "Hard"],
        required:[true,'difficulty is required']
    },


    state:{
        type: String,
        enum: ["Done", "On Going", "On Hold"],
        default : "On Going"
    },
    members: {type:[mongoose.SchemaTypes.ObjectId],ref:'Member'},
    project:{
        type:  mongoose.SchemaTypes.ObjectId,
        ref: 'Project',
        required:[true,'project is required']
    }


    
})

module.exports= mongoose.model('Task',taskSchema)