
/*temporary model, will use Member later*/
const mongoose = require("mongoose");

const Member = mongoose.model(
  "Member",
  new mongoose.Schema({
    username: {
      type: String,
      required:[true,'please provide a username for the user']},
    email: {
      type: String,
      required:[true,'email field is required']},
    password: {
      type: String,
      required:[true,'password field is required']},
    firstName: {
      type: String,
      required:[true,'first name field is required']},
    lastName: {
      type: String,
      required:[true,'last name field is required']},
    phone: {
        code: mongoose.SchemaTypes.Decimal128,
        number: String,
    },
    lastOnline: Date,
    tier: {
        type: String,
        enum: ['Golden', 'Silver', 'Bronze'],
        default: 'Bronze'
    },
    points: {type: mongoose.SchemaTypes.Decimal128, default: 0},
    dateJoined: {
        type: Date,
        default : Date.now,
    },
    roles: {
        type: [String],
        required:[true,'roles field is required'],
        default:["Member"],
        enum:{
            values: ["Member","Manager","Co-Manager","Lead","Co-Lead"],
            message: "{VALUE} is not a valid role, possible values : Member, Manager, Co-Manager, Lead, Co-Lead"}
    },
    departement: {
      type:mongoose.SchemaTypes.ObjectId,
      ref:'Departement', 
      required:[true,'department field is required']}
  })
);

module.exports = Member;

