const mongoose = require('mongoose')

module.exports = mongoose.model('Eternalplans', {
    fullname: { type: String },
    address: { type: String },
    birthday: { type: String },
    gender: { type: String },
    civil_status: { type: String },
    contact_number: { type: String },
    email_address: { type: String },
    product: { type: String },
    price: { type: Number },
})