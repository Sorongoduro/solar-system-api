const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/solarsystem'

mongoose.connect(url, {
    useNewUrlParser: true
})