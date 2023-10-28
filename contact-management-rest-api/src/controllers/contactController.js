const asyncHandler = require("express-async-handler") // use this instead of try-catch block; whenever errors are encountered, it passes to errorHandler

const contacts = require("../models/contactSchema")


// logic for request connection

const createContact = asyncHandler(async (req, res) => {
    const newContact = new contacts(req.body)
    const data = await newContact.save()
    res.status(201).send(data)
    console.log(req.body);
});

const getContacts = asyncHandler(async (req, res) =>{
    const data = await contacts.find({})
    res.status(200).json(data)
})

const getContactByID = asyncHandler(async(req, res) =>{
    const data = await contacts.findById(req.params.id)
    res.status(200).json(data)
})

const updateContactByID = asyncHandler(async(req, res) =>{
    const data = await contacts.findByIdAndUpdate(req.params.id, req.body, {
        new: true // display updated data
    })
    res.status(200).json(data)
})

const deleteContactByID = asyncHandler(async(req, res) =>{
    const data = await contacts.findByIdAndDelete(req.params.id)
    res.status(200).json(data)
})

module.exports = {createContact, getContacts, getContactByID, updateContactByID, deleteContactByID}