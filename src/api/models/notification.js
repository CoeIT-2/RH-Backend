const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const Member = require('./member')

const notificationSchema= new Schema({

    notif_type: {
        type: String,
        enum: ["Warning", "Reminder", "Message", "Notification"],
        required:[true,'type is required']
    },
    title: {
        type: String,
        required:[true,'title is required']
    },
    body: String,
    date: {
        type: Date,
        default: Date.now,
    },
    members: {type: [mongoose.SchemaTypes.ObjectId], ref: 'Member'},


    
})

module.exports= mongoose.model('Notification',notificationSchema)