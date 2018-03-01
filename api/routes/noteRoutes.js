'use strict';

var noteController = require("../controllers/noteController");

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