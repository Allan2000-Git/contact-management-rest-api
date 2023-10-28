const express = require("express")
const router = require("./routes/contactRoutes")
const errorHandler = require("./middleware/errorHandler")
const app = express()
require("dotenv").config()
require("./db/conn")

const port = process.env.PORT || 3000

// middeware
app.use(express.json())
app.use("/api/contacts", router)
app.use(errorHandler)


app.listen(port, () =>{
    console.log(`Server is running at port ${port}`);
})