const mongoose = require('mongoose')

const mensSchema = new mongoose.Schema({
    rank:{
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
        trim: true // remove spaces
    },
    dob:{
        type: Date,
        required: true,
        trim: true
    },
    country:{
        type: String,
        required: true,
        trim: true
    },
    score:{
        type: Number,
        required: true,
        trim: true
    },
    event:{
        type:String,
        default: "100m"
    }
})

// creating a new collection (table)
const Mens100mRanking = new mongoose.model("Mens100mRanking", mensSchema)

module.exports = Mens100mRanking