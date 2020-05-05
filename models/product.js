// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
// const Product = new Schema({
//   iProductID: ObjectId,
//   sProductTitle: String
// })
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  sProductTitle: {
    type: String,
    default: null,
    required: true
  }
})

module.exports = mongoose.model('product', ProductSchema)
