'use strict';

module.exports = function (app) {
    var list = require('../controllers/noteController');

    //List Routes
    app.route('/notes')
        .get(list.list_all_notes)
        .post(list.create_a_note);

    app.route('/notes/:noteId')
        .get(list.read_a_note)
        .put(list.update_a_note)
        .delete(list.delete_a_note);
};