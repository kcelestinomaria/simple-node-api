const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/product.model');
const router = express.Router();

router.get('/', async (req, res) => {

    // Below is a Controller 'function'
    try {
        const products = await Product.find({});
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: error.message} );
    }
})