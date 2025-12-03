import mongoose from "mongoose";

const lenderSchema = new mongoose.Schema({
  Firstname: { type: String, required: true },
  Lastname: { type: String, required: true },
  Location: String,
  Phone: String
});

export default mongoose.model("Lender", lenderSchema);

