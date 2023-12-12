const ContactModel = require('../models/contactModel');

module.exports = async (req, res) => {
    const contact = await ContactModel.find();
    res.json(contact);
}