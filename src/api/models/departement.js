import { Schema, SchemaTypes, model } from "mongoose";

const departementSchema= Schema({
    name: {
        type: String,
        required:[true,'please specify the name for the departement']
    },
    description: {
        type: String,
    },
    members:{type:[SchemaTypes.ObjectId],ref:'Member'},
    projects:{type:[SchemaTypes.ObjectId],ref:'Project'}
})

export default model('Departement',departementSchema)