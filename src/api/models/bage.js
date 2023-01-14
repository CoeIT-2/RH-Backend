const mongoose= require('mongoose');

const Schema = mongoose.Schema();

const Member = require('./member')


const bageSchema= Schema({

    name: String,
    decription: String,
    members: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Member' }],


    
})

module.exports= mongoose.model('Bage',bageSchema)