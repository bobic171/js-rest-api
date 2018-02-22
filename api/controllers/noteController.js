'use strict';

let mongoose = require('mongoose'),
    Note = mongoose.model('Notes');

exports.list_all_notes = function (req, res) {
    Note.find({}, function (err, note) {
        if (err)
            res.send(err);
        res.send(note);
    });
};

exports.create_a_note = function (req, res) {
    let new_note = new Note(req.body);
    new_note.save(function (err, note) {
        if (err)
            res.send(err);
        res.json(note);
    });
};

exports.read_a_note = function (req, res) {
    Note.findById(req.params.noteId, function (err, note) {
        if (err)
            res.send(err);
        res.json(note);
    });
};

exports.update_note = function (req, res) {
    Note.findByIdAndUpdate({
        _id: req.params.noteId
    }, req.body, {
        new: true
    }, function (err, note) {
        if (err)
            res.send(err);
        res.json(note);
    });
};

exports.delete_a_note = function (req, res) {
    Note.remove({
        _id: req.params.noteId
    }, function (err, note) {
        if (err)
            res.send(err);
        res.json({
            messege: 'Note removed'
        });
    });
};