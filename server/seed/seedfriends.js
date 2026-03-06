import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Friends from "../models/friends.model.js";

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI_DEV);

    await Friends.deleteMany();

    await Friends.insertMany([
      {
        Firstname: "Mikasa",
        Lastname: "Ackerman",
        Location: "Kannur, Kerala",
        Phone: "+91xxxxxxxx64",
      },
      {
        Firstname: "Nihad",
        Lastname: "Bangade",
        Location: "Coorg, Karnataka",
        Phone: "+91xxxxxxxx63",
      },
      {
        Firstname: "Ravi",
        Lastname: "Acharya",
        Location: "Delhi",
        Phone: "+91xxxxxxxx92",
      },
    ]);

    console.log("Seed successful");

  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
