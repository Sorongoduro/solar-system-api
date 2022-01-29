var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./db/mongoose')
const cors = require('cors')
const port = process.env.PORT || 3001
var routerPlanets = require('./routes/planets');


var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(routerPlanets);


app.listen(port, () => {
    console.log('Corriendo en puerto ' + port)
})

module.exports = app;
