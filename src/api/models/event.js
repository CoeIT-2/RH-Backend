const mongoose = require('mongoose');

const eventSchema= mongoose.Schema({
    name: {
        type: String,
        unique:true,
        required:[true,'please specify the name of the event']
    },
    description:  String,
    launch_date: {
        type: Date,
        required:[true,'please specify the launch date of the event']
    },
    organizers:{type:[mongoose.SchemaTypes.ObjectId],ref:'Member'},
    projects:{type:[mongoose.SchemaTypes.ObjectId],ref:'Project'}
})

module.exports = mongoose.model('Event',eventSchema)        //required:[true,'please specify the launch date of the event']



















        
