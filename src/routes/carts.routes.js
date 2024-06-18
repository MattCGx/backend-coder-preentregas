import { Router } from "express";
import * as cartController from "../controllers/cart.controller.js";

// instancias

const cartRouter = Router();

// rutas para carts

cartRouter.get("/", cartController.getAllCarts)

cartRouter.get("/:cartID", cartController.getCartById);

cartRouter.post("/", cartController.createCart);

cartRouter.delete("/:cartID", cartController.deleteCart);

cartRouter.put("/:cartID", cartController.updateCart);

cartRouter.post("/:cartID/product/:productID", cartController.addProductToCart);

cartRouter.delete("/:cartID/product/:productID", cartController.removefromCart);

cartRouter.put("/:cartID/product/:productID", cartController.updateProdQuantity);

cartRouter.delete("/:cartID", cartController.clearCart);

export default cartRouter;