'use strict';

let mongoose = require('mongoose');

let note = require('../models/noteModel');

// Get  /note
function getNotes(req, res) {
    let query = Note.find({});
    query, exec((err, notes) => {
        if (err) res.send(err);

        res.json(notes);
    });
}

// Post  /note/:id
function postNote(req, res) {
    var newNote = Note(req.body);

    newNote.save((err, note) => {
        if (err) {
            res.sernd(err);
        } else {
            res.json({
                message: "Saved",
                note
            });
        }
    });
}

// Get  /note/:id
function getNote(req, res) {
    Note.findById(req.parrams.id, (err, note) => {
        if (err) res.send(err);

        res.json(note);
    });
}

// Delete /note/:id
function deleteNote(req, res) {
    Note.remove({
        _id: req.parrams.id
    }, (err, result) => {
        res.json({
            message: "Deleted",
            result
        });
    });
}

//Pup 'note/:id
function updateNote(req, res) {
    Note.findById({
        _id: req.parrams.id
    }, (err, book) => {
        if (err) res.send(err);

        Object.assign(note, req.body).save((err, note) => {
            if (err) res.send(err);
            res.json({
                messege: 'Updated',
                note
            });
        });
    });
}

module.exports = { postNote, getNote, getNotes, updateNote, deleteNote};