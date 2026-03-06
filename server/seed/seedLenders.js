import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Lender from "../models/lender.model.js";

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI_DEV);

    await Lender.deleteMany();

    await Lender.insertMany([
      {
        Firstname: "Akinnesh",
        Lastname: "Ravinand",
        Location: "Kannur, Kerala",
        Phone: "+91xxxxxxxx09",
      },
      {
        Firstname: "Rahul",
        Lastname: "Tagore",
        Location: "Coorg, Karnataka",
        Phone: "+91xxxxxxxx58",
      },
      {
        Firstname: "Farhan",
        Lastname: "Naushad",
        Location: "Delhi",
        Phone: "+91xxxxxxxx36",
      },
    ]);

    console.log("Lender seed successful");

  } catch (err) {
    console.error("Seed failed:", err);
  } finally {
    mongoose.connection.close();
  }
}

seed();

