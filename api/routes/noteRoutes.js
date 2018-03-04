'use strict';

var noteController = require("../controllers/noteController");
let note = require('../models/noteModel');


function noteRouting(app) {

    app.route("/note")
        .get(note.getNotes)
        .post(note.postNote);

    app.route("/note/:id")
        .get(note.getNote)
        .delete(note.deleteNote)
        .put(note.updateNote);

};

module.exports = {
    noteRouting
};