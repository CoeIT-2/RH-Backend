const mongoose= require('mongoose');

const Schema = mongoose.Schema();

const Member = require('./member')

const notificationSchema= Schema({

    notif_type: {
        type: String,
        enum: [],
    },
    title: String,
    body: String,
    date: {
        type: Date,
        default: Date.now,
    },
    members: [{type: mongoose.SchemaTypes.ObjectId, ref: Member}],


    
})

module.exports= mongoose.model('Notification',notificationSchema)