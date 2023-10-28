// https://worldathletics.org/world-rankings/100m/men

const express = require("express");
const router = require("./routers/router");
require('dotenv').config();
require("../src/db/conn")

const app = express()
const port = process.env.PORT || 3000

app.get("/", async (req, res)=>{
    res.send("Hello from server")
})

app.use(express.json()) // server understands json format
app.use(router)



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})