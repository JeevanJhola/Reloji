import mongoose from "mongoose";
import Lender from "../models/lender.model.js";

mongoose.connect("mongodb://localhost:27017/reloji");

async function seed() {
  await Lender.deleteMany();

  await Lender.insertMany([
    { Firstname: "Akinnesh", Lastname: "Ravinand", Location: "Kannur, Kerala", Phone: "+91 xxxxxxxx09" },
    { Firstname: "Rahul", Lastname: "Tagore", Location: "Coorg, Karnataka", Phone: "+91 xxxxxxxx58" },
    { Firstname: "Farhan", Lastname: "Naushad", Location: "Delhi", Phone: "+91 xxxxxxxx36" }
  ]);

  console.log("Seed successful");
  mongoose.connection.close();
}

seed();

