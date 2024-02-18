const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get('/', (req, res) => {
    res.send("Hello from Node API Yeah!")
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


