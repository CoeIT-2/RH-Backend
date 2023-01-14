const mongoose= require('mongoose');
const Member = require('./member')

const Schema = mongoose.Schema();


const taskSchema= Schema({

    title: String,
    decription: String,
    deadline: Date,
    state: String,
    members: [mongoose.SchemaTypes.ObjectId],
    project: mongoose.SchemaTypes.ObjectId,


    
})

module.exports= mongoose.model('Task',tasknotificationSchema)