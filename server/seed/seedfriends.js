import mongoose from "mongoose";
import Friends from "../models/friends.model.js";

mongoose.connect("mongodb://localhost:27017/reloji");

async function seed() {
  await Friends.deleteMany();

  await Friends.insertMany([
    {
      Firstname: "Mikasa",
      Lastname: "Ackerman",
      Location: "Kannur,Kerala",
      Phone: " +91 xxxxxxxx64",
    },
    {
      Firstname: "Nihad",
      Lastname: "Bangade",
      Location: "coorg,Karnataka",
      Phone: " +91 xxxxxxxx63",
    },
    {
      Firstname: "Ravi",
      Lastname: "Acharya",
      Location: "Delhi",
      Phone: " +91 xxxxxxxx92",
    },
  ]);

  console.log("Seed successful");
  mongoose.connection.close();
}

seed();
