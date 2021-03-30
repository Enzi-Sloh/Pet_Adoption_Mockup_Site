const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const PetSchema = new mongoose.Schema({
    name:{ 
        type: String,
        required: [true,"We need a name to call our pet"],
        minlength: [3, 'Name must be at least 3 characters long'],
        unique: true
    },
    type: { 
        type: String,
        required: [true, "Tell us what type of animal they are"],
        minlength: [3, 'Type must be at least 3 characters long']
        },
    description: { 
        type: String,
        required: [true, "What are they like?"],
        minlength: [3, 'Description must be at least 3 characters long']
    },
    skill1: { 
        type: String
    },
    skill2: { 
        type: String
    },
    skill3: { 
        type: String
    },
    likes:{
        type: Number
    }
}, { timestamps: true });
PetSchema.plugin(uniqueValidator, { message: 'Name must be unique'});
module.exports = mongoose.model('Pet', PetSchema);
