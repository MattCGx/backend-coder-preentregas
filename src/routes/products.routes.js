

import { Router } from "express";
import * as productController from "../controllers/product.controller.js";
import { productValidation } from "../middlewares/productValidation.js";
import { idValidation } from "../middlewares/idValidation.js";


// instancias

const productRouter = Router();

// rutas para products

productRouter.get("/", productController.getAllProducts);

productRouter.get("/:productId", productController.getProductById);

productRouter.post("/", productValidation, productController.createProduct);

productRouter.post("/baseinicio", productController.createProduct); // un solo uso: para agregar los 45 productos de ejemplo

productRouter.put("/:productId", idValidation, productController.updateProduct);

productRouter.delete("/:productId", productController.deleteProduct)

export default productRouter;