import Products from "../models/product.model.js";

export const getProducts = async (req, res) => {
  const product = await Products.find();
  res.json(product);
};
