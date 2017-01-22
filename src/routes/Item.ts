import mongoose = require('mongoose')

let _schema: mongoose.Schema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    title: {
        type: String
    },
});

export let Item = mongoose.model('Item', _schema);



