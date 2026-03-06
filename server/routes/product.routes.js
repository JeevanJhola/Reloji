import express from "express";
import { getProducts, addProduct } from "../controllers/product.controller.js";
import { upload } from "../middlewares/upload.middleware.js";

const router = express.Router();

router.get("/", getProducts);
router.post(
  "/",
  upload.single("image"), 
  addProduct
);

export default router;
