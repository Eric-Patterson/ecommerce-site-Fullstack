const mongoose = require('mongoose');
const{names, descriptors} = require('./seedHelpers');
const Product = require('../models/store');

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

const sample = array =>array[Math.floor(Math.random() * array.length)];

const seedDatabase = async () =>{
    await Product.deleteMany({});
    // const c = new Product({title: 'purple field'});
    // await c.save(); 
    for(let i = 0; i < 15; i++) {
        // const random1000 = Math.floor(Math.random() * 10);
        const productnew = new Product({
           title : `${sample(descriptors)} ${sample(names)}`
        })
        await productnew.save();
        
    }
}

seedDatabase();