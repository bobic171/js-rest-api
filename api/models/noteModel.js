'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let NoteSchema = new Schema({
    name: {
        type: String
    },
    user_id: {
        type: String,
        required: true
    },
    note_id: {
        type: String,
        required: true
    },
    content: {
        type: String
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

NoteSchema.pre('save', next => {
    now = new Date();
    if (!this.Created_date) {
        this.Created_date = now;
    }
    next();
});

module.exports = mongoose.model('note', NoteSchema);