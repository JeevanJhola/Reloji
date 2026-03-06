import mongoose from "mongoose";

const friendsSchema = new mongoose.Schema({
  Firstname: { type: String, required: true },
  Lastname: { type: String, required: true },
  Location: String,
  Phone: String,
});

export default mongoose.model("Friends", friendsSchema);
