import Lender from "../models/lender.model.js";

export const getLenders = async (req, res) => {
  const lenders = await Lender.find();
  res.json(lenders);
};
