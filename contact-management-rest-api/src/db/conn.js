const mongoose = require("mongoose")

mongoose.connect(process.env.DB_CONNECTION_STRING,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=>console.log("Database connected"))
.catch((error)=> console.log(`${error} occured`))