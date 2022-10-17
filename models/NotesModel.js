const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: String,
    dateAdded: String,
    dateUpdated: String
});

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;

/*
{
    "noteTitle": "Let us c",
    "noteDescription": "Mahmoud",
    "priority": "high",
    "dateAdded":"12/10/1995",
    "dateUpdated": "12/10/2022"
}
*/