const mongoose = require ("mongoose");

<<<<<<< HEAD
mongoose.connect("mongodb://localhost:27017/tracker", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(() => 
    console.log(`Mongo db connected`))
    .catch((e) => 
    console.log(`no connection`)); 
=======
mongoose.connect("mongodb://127.0.0.1:27017/tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB connected");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
>>>>>>> f36d75c (second Commit)
