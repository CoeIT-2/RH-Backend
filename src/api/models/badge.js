const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const Member = require('./member')


const bageSchema= new Schema({

    name: {type: String, 
        required:[true,'name is required']
    },
    decription: String,
    members: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Member' }],


    
})

module.exports= mongoose.model('Bage',bageSchema)