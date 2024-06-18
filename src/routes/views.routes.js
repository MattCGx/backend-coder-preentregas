import { Router } from "express";
import { __dirname } from "../path.js";
import * as productService from "../services/product.services.js";


const router = Router();



router.get("/",  async (req, res, next) => {
  try {
    const { page, limit, name, sort } = req.query;
    const response = await productService.getAllProducts(page, limit, name, sort);
    const products = response.docs ? response.docs : [];
    const nextLink = response.hasNextPage ? `http://localhost:8080/api/products?page=${response.nextPage}` : null;
    const prevLink = response.hasPrevPage ? `http://localhost:8080/api/products?page=${response.prevPage}` : null;

    res.render("home", { products, nextLink, prevLink });
  } catch (error) {
    console.log("error al renderizar");
    next(error.message);
  }
});







router.get("/old", async (req, res) => {
  try {
    const { limit } = req.query;
    const products = await productManager.getProducts(limit);
    res.render("home", { products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/admin", async (req, res) => {
  res.render("admin");
});

export default router;
