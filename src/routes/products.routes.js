// imports

import { Router } from "express";
import { __dirname } from "../path";
import { productValidation } from "../middlewares/productValidation";
import ProductManager from "../managers/products.manager.js";

// instancias

const productRouter = Router();
const productManager = new ProductManager(`${__dirname}/db/products.json`);

// rutas para products


