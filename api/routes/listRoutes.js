`use strict`;
module.exports = function(app) {
    let list = require('../controllers/listController');

    //List Routes
    app.route('/tasks')
        .get(list.list_all_tables)
        .post(list.create_a_note);

    app.route('/tasks/:noteId')
        .get(list.read_a_note)
        .put(list.update_a_note)
        .delete(list.delete_a_note)
}