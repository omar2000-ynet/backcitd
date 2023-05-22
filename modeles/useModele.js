const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const schemaUser = mongoose.Schema({
    nom:{   
        type:String,
        maxlength: 25,
        lowercase: true,
        trim: true
    },
    email:{
        type: String,
        validate: [isEmail],
        lowercase: true,
        unique: true,
        trim: true,
        required:true
    },
    telephone:{
        type: String,
        unique: true,
        trim: true,
        required:true
    },
    sexe:String,
    password: String,
    
},
{
    timestamps: true,
});

const user = mongoose.model("users",schemaUser);
module.exports = user;