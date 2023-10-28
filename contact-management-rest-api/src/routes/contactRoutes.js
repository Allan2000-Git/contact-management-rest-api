const express = require("express")
const { getContacts, createContact, getContactByID, updateContactByID, deleteContactByID } = require("../controllers/contactController")
const router = express.Router()


router.route("/").post(createContact)

router.route("/").get(getContacts)

router.route("/:id").get(getContactByID)

router.route("/:id").patch(updateContactByID)

router.route("/:id").delete(deleteContactByID)

// shorthand routes
// router.route("/").post(createContact).get(getContacts)
// router.route("/:id").get(getContactByID).patch(updateContactByID).delete(deleteContactByID)


module.exports = router