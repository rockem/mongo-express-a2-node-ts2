import mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test');

interface IItem extends mongoose.Document {
    id: string;
    title: string;
}

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



