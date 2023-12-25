import mongoose from "mongoose";

const {Schema} = mongoose;
const productSchema = new Schema({
  image: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
    unique: true,
  },
  offer: {
    type: Number,
    require: true,
    unique: true,
  },
  stars: {
    type: Number,
    require: true,
    unique: true,
  },
  review: {
    type: Number,
    require: true,
    unique: true,
  },
  category: {
    type: String,
    require: true,
    unique: true,
  },
  sale: {
    type: String,
    require: true,
    unique: true,
  },
}, {timestamps: true});


export default  mongoose.models.Product || mongoose.model("Product", productSchema);

 
