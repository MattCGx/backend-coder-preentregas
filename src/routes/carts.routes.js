import { Router } from "express";
import { __dirname } from "../path.js";
import {AddProdToCartValidation} from "../middlewares/addProdToCartValidation.js";
import CartsManager from "../managers/carts.manager.js";

// instancias

const cartRouter = Router();
const cartManager = new CartsManager(`${__dirname}/db/products.json`);

// rutas para products

cartRouter.get("/:cartID", async (req, res) => {
    try {
        const {cartID} = req.params;
        const cart = await cartManager.getCartById(cartID);
        !cart ? res.status(404).json({ error: "Cart not found" }) : res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
});

cartRouter.post("/", async (req, res) => {
    try {
       const cart = await cartManager.addNewCart();
       res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

cartRouter.post("/:cartID/products/:productID", AddProdToCartValidation, async (req, res) => {
    try {
      const {cartID, productID} = req.params;
      const cart = await cartManager.addProductToCart(cartID, productID);
      !cart ? res.status(404).json({ error: "Cart not found" }) : res.status(201).json(cart);  
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
