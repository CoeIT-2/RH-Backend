import { Schema, SchemaTypes, model } from "mongoose";

const eventSchema= Schema({
    name: {
        type: String,
        required:[true,'please specify the name of the event']
    },
    description:  String,
    launch_date: {
        type: Date,
        required:[true,'please specify the launch date of the event']
    },
    organizers:{type:[SchemaTypes.ObjectId],ref:'Member'},
    projects:{type:[SchemaTypes.ObjectId],ref:'Project'}
})

export default model('Event',eventSchema)