'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    name: {
        type: String,
        required: 'Name of note'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Notes', NoteSchema);