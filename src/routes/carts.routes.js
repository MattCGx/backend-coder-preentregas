import { Router } from "express";
import { __dirname } from "../path.js";
import {AddProdToCartValidation} from "../middlewares/addProdToCartValidation";
import CartsManager from "../managers/carts.manager.js";

// instancias

const cartRouter = Router();
const cartManager = new CartsManager(`${__dirname}/db/products.json`);

// rutas para products
