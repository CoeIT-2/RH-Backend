const mongoose= require('mongoose');
const Member = require('./member')

const Schema = mongoose.Schema;


const ticketSchema= new Schema({

    member: {
        type:  mongoose.SchemaTypes.ObjectId,
        required:[true,'member is required']
    },
    discordIssue: {
        type: Boolean,
    },
    personalInfoError: {
        type: String,
    },
    changeDepartementTo: {type:[mongoose.SchemaTypes.ObjectId],ref:'Departement'}           
})

module.exports= mongoose.model('Ticket',ticketSchema)