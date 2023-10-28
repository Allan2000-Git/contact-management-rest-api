const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://allan:${process.env.DB_PASSWORD}@mens-athletics-100m.qhrzkxt.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(()=>console.log("Database connected"))
.catch((error)=>console.log(`${error} occured`))