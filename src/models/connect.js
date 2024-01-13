const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },

})

const join=new mongoose.model("join" , expenseSchema);

module.exports = join;