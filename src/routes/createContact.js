const ContactModel = require('../models/contactModel');

module.exports = async (req, res) => {
    const { text, PhNumber } = req.body;

    //validate the request
    

    //create the contact
    const contact = new ContactModel({
        text,
        // completed: false,
        PhNumber
    })
    const newcontact = await contact.save();
    res.json(newcontact);
};