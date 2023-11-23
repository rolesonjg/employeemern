const mongoose = require('mongoose');
const Laborerschema = new mongoose.Schema({
    name: String,
    designation: String,
    salary: Number,
    location: String,

});

const Laborer = mongoose.model('laborer', Laborerschema);

module.exports = Laborer