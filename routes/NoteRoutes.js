const express = require("express")
const noteModel = require('../models/NotesModel');
const routes = express.Router()
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async (req, res) => {
    const newNote = new noteModel(req.body)
    // Validate request
    if(!newNote) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    try{
        await newNote.save();
        res.status(201).send(newNote)
 
     }catch(error){
         res.status(500).send({message: "Error while inserting"})
 
     }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async (req, res) => {
    // Validate request
    try{
        const notes =  await noteModel.find()
        res.status(200).send(notes)
    }catch{
        res.status(500).send({message: "No Notes Found!"})
   }
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async (req, res) => {
    // Validate request
    try{
        const note = await noteModel.find()
        res.status(200).send(note)
    }catch{
        res.status(500).send({message: "No Notes Found!"})
    }
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.patch('/notes/:noteId', async(req, res) => {
    // Validate request
    try{
        const note = await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
        res.status(201).send(note)
    }catch{
        res.status(500).send({message: "No Notes Found!"})
    }
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async(req, res) => {
   try{
    const note = await noteModel.findByIdAndDelete(req.params.noteId)
    if(!note){
        res.status(404).send({message:"No Note Found!"})
    }
    res.status(200).send(note)

   } catch(err){
    res.status(400).send(err)
   }
});

module.exports = routes;
