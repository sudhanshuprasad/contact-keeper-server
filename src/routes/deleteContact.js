const ContactModel = require('../models/contactModel');

module.exports = async (req, res) => {
    const { id } = req.params;
    const contact = await ContactModel.findById(id);
    if (contact==null) {
        return res.status(404).send({message: 'Contact not found'});
    }
    await contact?.deleteOne();
    res.status(204).json(contact);
}