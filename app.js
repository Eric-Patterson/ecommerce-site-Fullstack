const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/store');

// connecting local mongo database
mongoose.connect('mongodb://localhost:27017/ecommerce-site',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// logic to check is database is connected
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () =>{
    console.log("Database connected");
})

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {
    // res.send('Hello from ecommerce site') 
    res.render('home') 
})

app.get('/makeproduct', async (req, res) => {
    // res.send('Hello from ecommerce site') 
    const product = new Product({title: 'Second Product'});
    await product.save();
    res.send(product)
})

app.listen(3001, () =>{
    console.log('Serving on port 3001')
})