import ProductsManager from "../managers/products.manager.js";
import CartsManager from "../managers/carts.manager.js";
import { __dirname } from "../path.js";

const productsManager = new ProductsManager(`${__dirname}/db/products.json`);
const cartsManager = new CartsManager(`${__dirname}/db/carts.json`);

export const AddProdToCartValidation = async (req, res, next) => {
    try {
      const { cartId, prodId } = req.params;
      const prodListed = await productsManager.getProductsById(prodId);
      console.log(prodListed);
      const cartListed = await cartsManager.getCartById(cartId);
      if (!prodListed) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }
      if (!cartListed) {
        res.status(404).json({ error: 'Cart not found' });
        return;
      }
      req.cartId = prodListed;
      req.prodId = cartListed;
      next();
    } catch (error) {
      next(error);
    }
  };

 