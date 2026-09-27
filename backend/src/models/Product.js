import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name:String,
  category:String,
  size:String,
  image:String,
  price:Number,
  originalPrice:Number,
  rating:String,
  reviews:Number
});

export default mongoose.model("Product", ProductSchema);