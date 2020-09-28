const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const password = '4L8iubZZuqYPAKJ';

const uri = "mongodb+srv://organicUser:4L8iubZZuqYPAKJ@cluster0.sqmks.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})




client.connect(err => {
    const collection = client.db("organicdb").collection("products");
    const product = { name: "modhu", price: 25, quantity: 20 };
    collection.insertOne(product)
        .then(result => {
            console.log('one product added');
        })

    console.log('database connected');

});


app.listen(3000);