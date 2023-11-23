const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
require("./db/connect.js");
const Laborer = require("./models/Laborermodel.js")
const cors = require('cors');
app.use(express.json()); // For parsing JSON data
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// const corsOption = {
//     origin: ['http://localhost:3000'],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
// }
// app.use(cors(corsOption));



//Routes
app.get('/seeallLaborer', async (req, res) => {
    try {
        const laborers = await Laborer.find();
        res.json(laborers);
    } catch (error) {
        console.error('Error fetching laborers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Route to add a new hospital
app.post('/addnewlaborer', async (req, res) => {
    try {
        const newLaborer = new Laborer(req.body);
        const savedLaborer = await newLaborer.save();
        res.json({ message: 'Laborer created', addedemployee: savedLaborer });
        console.log("reqesutbody", req.body)
    } catch (error) {
        console.error('Error creating Laborer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to update a hospital
app.put('/updatethelaborer/:id', async (req, res) => {
    try {
        const updatedLaborer = await Laborer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: 'laborer updated', laborer: updatedLaborer });
    } catch (error) {
        console.error('Error updating laborer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to delete a hospital
app.delete('/deletethelaborer/:id', async (req, res) => {
    try {
        await Laborer.findByIdAndDelete(req.params.id);
        res.json({ message: 'Laborer deleted' });
    } catch (error) {
        console.error('Error deleting Laborer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});








app.listen(6000, () => {
    console.log("Listening to port 6000")
});