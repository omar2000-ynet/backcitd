const mongoose = require("mongoose");
const postquestions = mongoose.Schema({
    message:{   
        type:String,
        lowercase: true,
    },
    reponses:{
        type:[{
            reponse:String,
            dateReponse : String
        }]
    },
    userEmail:String,
    nom:String,
},
{
    timestamps: true,
});

const user = mongoose.model("post",postquestions);
module.exports = user;