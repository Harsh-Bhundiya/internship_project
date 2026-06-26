const mongoose=require("mongoose");

const feedbackschema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    eventname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    rating:{
        type:Number,
        require:true,
    },
    msg:{
        type:String,
        require:true,
    },

})
const feedback=mongoose.model("feedback",feedbackschema);
module.exports=feedback;