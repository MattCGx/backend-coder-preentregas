import productsManager from "../managers/products.manager.js";
import cartsManager from "../managers/carts.manager.js";

export const AddProdToCartValidation = async (req, res, next) => {
    try {
      const { cartId, prodId } = req.params;
      const prodListed = await productsManager.getProductById(prodId);
      const cartListed = await cartsManager.getCartById(cartId);
      if (!prodListed) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }
      if (!cartListed) {
        res.status(404).json({ error: 'Cart not found' });
        return;
      }
      req.prodListed = prodListed;
      req.cartListed = cartListed;
      next();
    } catch (error) {
      next(error);
    }
  };

 