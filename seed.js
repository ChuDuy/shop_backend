import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./src/model/Products.js";
dotenv.config();
mongoose.connect(process.env.MONGO_URI);
const products = [

   {
      name: "Iphone 16",
      price: 3500000,
      stock: 10
   },

   {
      name: "Samsung S24",
      price: 2500000,
      stock: 5
   }

];
const seedData = async()=>
{
    try {
            await Product.deleteMany();

      await Product.insertMany(products);

      console.log("Seed success");

      process.exit();

    } catch (error) {
        console.log(error);
        process.exit();
    }
};
seedData();