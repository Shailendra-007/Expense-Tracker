const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/tracker", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(() => 
    console.log(`Mongo db connected`))
    .catch((e) => 
    console.log(`no connection`)); 