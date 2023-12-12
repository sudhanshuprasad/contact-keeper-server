const ContactModel = require('../models/contactModel');

module.exports = async (req, res) => {
    const { id } = req.params;
    const contact = await ContactModel.findById(id);
    await contact.remove();
    res.status(204).json(contact);
}