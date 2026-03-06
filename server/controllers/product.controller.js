import Products from "../models/product.model.js";

export const getProducts = async (req, res) => {
  const product = await Products.find();
  res.json(product);
};

export const addProduct = async (req, res) => {
  try {
    const { name, category, buyPrice, rentPrice, rentTerm } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const product = await Products.create({
      name,
      category,
      buyPrice,
      rentPrice,
      rentTerm,
      image: `/images/${req.file.filename}` 
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

