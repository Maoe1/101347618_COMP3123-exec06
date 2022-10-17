const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
SERVER_PORT = 8001
const DB_URL = "mongodb+srv://maoe1:jpgs6cnFQRW8MXkN@cluster0.mtvhcjr.mongodb.net/NoteSchema?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const NoteRoutes = require("./routes/NoteRoutes")

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



app.use("/api/v1", NoteRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB exercise 06</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})