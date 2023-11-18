// Read .env file and set environment variables
require('dotenv').config();
const random = Math.floor(Math.random() * 100);
const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

//Middelware
app.use(express.json());
app.use(cors());


// Use official mongodb driver to connect to the server
const { MongoClient, ObjectId } = require('mongodb');

// New instance of MongoClient with connection string
// for Mongo DB
const url = process.env.CONNECTION_STRING;
const client = new MongoClient(url);

//Endpoints
app.get("/profs", async function (req, res) {
    await client.connect();
    const db = client.db(`profratings`);
    const collection = db.collection('professors');
    const profs = await collection.find().toArray();
    
    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify(profs));
    client.close();
});

app.get("/profs/:id", async function (req, res) {
    await client.connect();
    const db = client.db(`profratings`);
    const collection = db.collection('professors');
    const prof = await collection.findOne({
        id: req.params.id,
    });

    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify(prof));
    client.close();
});

app.put("/profs/:id", async function (req, res) {
    await client.connect();
    const db = client.db(`profratings`);
    const collection = db.collection('professors');
    const professor = {
        name: req.body.name,
        rating: req.body.rating,
    };
    const query = { name: professor.name};
    const update = { $set: professor };
    const options = {upsert: true, new: true};
    
    const prof = await collection.updateOne(query, update, options);
    
    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify(prof));
    client.close();
});

app.delete("/profs/:id", async function (req, res) {
    await client.connect();
    const db = client.db(`profratings`);
    const collection = db.collection('professors');
    console.log(req.params.id);
    const prof = await collection.deleteOne({
        id: req.params.id,
    });

    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify(prof));
    client.close();
});

app.post("/profs", async function (req, res) {
    await client.connect();
    const db = client.db(`profratings`);
    const collection = db.collection('professors');
    const professor = {
        id: (await collection.find().toArray()).length,
        name: req.body.name,
        rating: req.body.rating,
    };
    console.log(professor);
    const prof = await collection.insertOne(professor);
    
    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify(prof));
    client.close();
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));