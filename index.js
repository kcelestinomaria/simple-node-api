const express = require('express')
const mongoose = require('mongoose')

const Product = require('./models/product.model.js');

const app = express()

// set up middleware to employ json
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Node API Yeah!")
});

// res -> response
// req -> request
app.post('/api/products', async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

mongoose.connect("mongodb+srv://celestino127:C0mpa$$i0n127@cluster0.5qsdpkx.mongodb.net/Simple-Node-API?retryWrites=true&w=majority")
.then(() => {
    console.log("connected to the database!");
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
    
})
.catch(() => {
    console.log("connection failed!");
});


