const express = require('express')
const mongoose = require('mongoose')

const Product = require('./models/product.model.js');

const app = express()

// set up middleware to employ json
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Node API Yeah!")
});


// POST
app.post('/api/products', async (req, res) => {
    try{
        const product = await Product.create(req.body);
        //const products = await Product.find({});
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

// Update a product
app.put('/api/product/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        // suppose if product doesn't exist
        if (!product) {
            return res.status(404).json({message: "Product Not Found"});
        }

        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct);

    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

// deleting a product
app.delete('/api/product/:id', async (req, res) => {
    try {

        const { id, name } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({message: "Product Not Found"});
        }

        res.status(200).json({message: "Product deleted successfully"});

    } catch(error) {
        res.status(500).json({message: error.message});
    }
})


// res -> response
// req -> request
app.get('/api/products', async (req, res) => {
    try{
        //const product = await Product.create(req.body);
        const products = await Product.find({});
        res.status(200).json(products);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/product/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})



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


