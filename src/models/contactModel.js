const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
    PhNumber:{
        type: Number,
        required: true,
    }
});

const ContactModel = mongoose.model('Contacts', ContactSchema);

module.exports = ContactModel;