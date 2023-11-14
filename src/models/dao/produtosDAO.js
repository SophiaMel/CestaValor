const mongoose = require('mongoose');
const products = mongoose.model( 'products',
    new mongoose.Schema({
    titulo:String,
    linkimg:String,
    price: String,
    descrição:String
    // Add more fields as needed
  })
);
module.exports = products;