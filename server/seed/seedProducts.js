import mongoose from "mongoose";
import Products from "../models/product.model.js";

mongoose.connect("mongodb://localhost:27017/reloji");

async function seed() {
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

  console.log("Seed successful");
  mongoose.connection.close();
}

seed();
