const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://Admin:eternalplans@cluster0.q38z0tw.mongodb.net/eternalplans_db?retryWrites=true&w=majority'

module.exports = () => {
    return mongoose.connect(dbUri)
}