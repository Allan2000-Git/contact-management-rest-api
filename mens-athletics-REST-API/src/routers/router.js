const express = require("express")
const Mens100mRanking = require("../models/schema")

const router = express.Router()

// C R U D

// Create
router.post("/api/mens", async (req, res)=>{
    try {
        const newRecord = new Mens100mRanking(req.body)
        const data = await newRecord.save()
        res.status(201).send(data)
        console.log(req.body);
    } catch (error) {
        res.status(400).send(error)
    }
})

// Read
// Get all data
router.get("/api/mens", async (req, res)=>{
    try {
        const data = await Mens100mRanking.find({}).sort({"rank":1}) // sort by rank
        res.send(data)
        console.log(req.body);
    } catch (error) {
        res.status(400).send(error)
    }
})

// Get data by id
router.get("/api/mens/:id", async (req, res)=>{
    try {
        const data = await Mens100mRanking.findById(req.params.id)
        res.send(data)
        console.log(req.body);
    } catch (error) {
        res.status(400).send(error)
    }
})

// Update data by id
router.patch("/api/mens/:id", async (req, res)=>{
    try {
        const data = await Mens100mRanking.findByIdAndUpdate(req.params.id, req.body, {
            new: true // display updated data
        })
        res.send(data)
        console.log(req.body);
    } catch (error) {
        res.status(500).send(error)
    }
})

// Delete data by id
router.delete("/api/mens/:id", async (req, res)=>{
    try {
        const data = await Mens100mRanking.findByIdAndDelete(req.params.id)
        res.send(data)
        console.log(req.body);
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router