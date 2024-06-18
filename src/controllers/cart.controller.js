import * as service from '../services/cart.services.js'

export const createCart = async (req, res, next) => {
    try {
      const newCart = await service.createCart();
      if (!newCart) res.status(404).json({ msg: "Cannot create cart 🚫" });
      else res.status(200).json(newCart);
    } catch (error) {
      next(error.message);
    }
  };
export const getAllCarts = async (req, res, next) => {
    try {
      const response = await service.getAllCarts();
      res.status(200).json(response);
    } catch (error) {
      next(error.message);
    }
  };
  
  export const getCartById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await service.getCartById(id);
      if (!response) res.status(404).json({ msg: "Cart not found 🚫" });
      else res.status(200).json(response);
    } catch (error) {
      next(error.message);
    }
  };
  
  export const updateCart = async (req, res, next) => {
    try {
      const { id } = req.params;
      const cartUpd = await service.updateCart(id, req.body);
      if (!cartUpd) res.status(404).json({ msg: "Error updating cart 🚫" });
      else res.status(200).json(cartUpd);
    } catch (error) {
      next(error.message);
    }
  };
  
  export const deleteCart = async (req, res, next) => {
    try {
      const { id } = req.params;
      const cartDel = await service.deleteCart(id);
      if (!cartDel) res.status(404).json({ msg: "Cannot delete cart 🚫" });
      else res.status(200).json({ msg: `Cart id: ${id} deleted` });
    } catch (error) {
      next(error.message);
    }
  };

export const addProductToCart = async (req, res, next) => {
    try {
      const { idCart } = req.params;
      const { idProd } = req.params;
      const ProductToAdd = await service.addProductToCart(
        idCart,
        idProd,
      );
      if (!ProductToAdd) res.json({ msg: "Error adding product 🚫" });
      else res.json(ProductToAdd);
    } catch (error) {
      next(error.message);
    }
  };

  export const removefromCart = async (req, res, next) => {
    try {
      const { idCart } = req.params;
      const { idProd } = req.params;
      const delProdToUserCart = await service.removefromCart(
        idCart,
        idProd,
      );
      if (!delProdToUserCart) res.json({ msg: "cannot remove product from cart 🚫" });
      else res.json({msg: `product ${idProd} deleted to cart`});
    } catch (error) {
      next(error.message);
    }
  };

  export const updateProdQuantity = async (req, res, next) => {
    try {
      const { idCart } = req.params;
      const { idProd } = req.params;
      const { quantity } = req.body;
      const  updateProdQuantity = await service.updateProdQuantity(
        idCart,
        idProd,
        quantity
      );
      if (!updateProdQuantity) res.json({ msg: "cannot update product quantity 🚫" });
      else res.json(updateProdQuantity);
    } catch (error) {
      next(error.message);
    }
  };

  export const clearCart = async (req, res, next) => {
    try {
      const { idCart } = req.params;
      const clearCart = await service.clearCart(
        idCart,
      );
      if (!clearCart) res.json({ msg: "cannot clear this cart 🚫" });
      else res.json(clearCart);
    } catch (error) {
      next(error.message);
    }
  };

  
  