const mongoose = require("mongoose");
const questionscours = mongoose.Schema({
    question:{   
        type:String,
        lowercase: true,
    },
    reponses:[String],
    bonneReponse:{
        type:String,
        lowercase: true,
    },
    commentaires:{
        type:[
            {
                commentaire:String,
                dateComment: String
            }
        ]
    },
    cours:{
        type: String,
        lowercase:true
    },
    captureAssocie: {
        type: String,
        default: "./tillmenImg/logoTill.png"
    },
},
{
    timestamps: true,
}
);
const user = mongoose.model("questions",questionscours);
module.exports = user;