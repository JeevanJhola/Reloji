import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // path or URL
    buyPrice: { type: Number, required: true },
    rentPrice: { type: Number, required: true },
    rentTerm: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
