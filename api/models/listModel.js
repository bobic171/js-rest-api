`use strict`;
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let NoteSchema = new Schema({
    name: {
        type: String,
        required: 'Name of the note'
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