// imports

import { Router } from "express";
import { __dirname } from "../path";
import { productValidation } from "../middlewares/productValidation";
// import ProductManager <<<<<<<-----------------




// instancias

const productRouter = Router();
const productManager = new ProductManager(`${__dirname}/db/products.json`);

// rutas para products


