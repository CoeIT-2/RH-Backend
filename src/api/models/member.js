
/*temporary model, will use Member later*/
const mongoose = require("mongoose");

const Member = mongoose.model(
  "Member",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    phone: {
        code: mongoose.SchemaTypes.Decimal128,
        number: String,
    },
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
    roles: {
        type: [String],
        enum:{
            values: ["Member","Manager","Co-Manager","Lead","Co-Lead"],
            message: "{VALUE} is not a valid role, possible values : Member, Manager, Co-Manager, Lead, Co-Lead"}
    },
  })
);

module.exports = Member;

