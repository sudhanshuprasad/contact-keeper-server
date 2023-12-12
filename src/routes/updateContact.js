const ContactModel = require('../models/contactModel');

module.exports = async (req, res) => {
    const { id } = req.params;
    const contact = await ContactModel.findById(id);
    contact.completed = req.body.completed;
    contact.text = req.body.text;
    await contact.save();
    res.json(contact);
}