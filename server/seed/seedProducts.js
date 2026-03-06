import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Products from "../models/product.model.js";

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI_DEV);

    await Products.deleteMany();

    await Products.insertMany([
      {
        name: "AeroFly Pro Drone",
        category: "Photography",
        image: "/images/AeroFly_Pro_Drone.jpg",
        buyPrice: 249,
        rentPrice: 35,
        rentTerm: "Min. 3-month term",
      },
      {
        name: "Pro X Camera",
        category: "Photography",
        image: "/images/camera.jpg",
        buyPrice: 999,
        rentPrice: 99,
        rentTerm: "Min. 6-month term",
      },
    ]);

    console.log("Product seed successful");

  } catch (err) {
    console.error("Seed failed:", err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
