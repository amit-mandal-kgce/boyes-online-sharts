import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
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
});

const Product =
  mongoose.models.products || mongoose.model("products", productSchema);

export default Product;
