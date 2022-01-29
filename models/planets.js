const mongoose = require("mongoose");
const { Schema } = mongoose

const planet = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    rotvel: {
        type: String,
        required: true
    },
    diam: {
        type: String,
        required: true
    },
    temp: {
        type: String,
        required: true
    },
    mass: {
        type: String,
        required: true
    },
    density: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

})

const Planet = mongoose.model('planetas', planet)
module.exports = Planet