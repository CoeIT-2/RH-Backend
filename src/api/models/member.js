const mongoose= require('mongoose');

const Schema = mongoose.Schema();


const memberSchema= Schema({

    name: String,
    lastName: String,
    email: String,
    password: String,
    phone: {
        code: int,
        number: String,
    },
    role: String,
    lastOnline: Date,
    tier: {
        type: String,
        enum: ['Golden', 'Silver', 'Bronze'],
    },
    points: mongoose.SchemaTypes.Decimal128,
    dateJoined: {
        type: Date,
        default : Date.now,
    },

    
})

module.exports= mongoose.model('Member',memberSchema)