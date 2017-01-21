import mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test');

var _schema: mongoose.Schema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    title: {
        type: String
    },
});

export var Item = mongoose.model('Item', _schema);



