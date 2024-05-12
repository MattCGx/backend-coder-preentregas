// imports

import fs from 'fs';
import {v4 as uuid} from 'uuid';
import { __dirname } from '../path';
import ProductsManager from './products.manager.js';

// Instancias

const productsManager = new ProductsManager(`${__dirname}/db/products.json`);

// def clase

class CartsManager {
    constructor(path) {
        this.path = path;
    }

    // metodos

    async getCarts() {
        try {
            if (fs.existsSync(this.path)) {
                const cartsFile = await fs.promises.readFile(this.path, 'utf-8');
                const carts = JSON.parse(cartsFile);
                return carts;
            } else return [];
        } catch (error) {
          console.error(error);  
        }
    }

    async addNewCart() {
        try {
            const newCart = {
                id: uuid(),
                productsInCart: [],
            };
            const carts = await this.getCarts();
            carts.push(newCart);
            await fs.promises.writeFile(this.path, JSON.stringify(carts, null, '\t'));
            return newCart;
        } catch (error) {
            console.error(error);
        }
    }

    async getCartById(id) {
        try {
            const carts = await this.getCarts();
            const cart = carts.find(cart => cart.id === id);
            return cart || null;
        } catch (error) {
            console.error(error);
        }
    }

    async addProductToCart(cartId, productId) {
        try {
            let carts = await this.getCarts();
            const cartToUpdate = await this.getCartById(cartId);
            const productInCart = cartToUpdate.products.find((prod) => prod.id === productId);
            if (!productInCart){
                const prodToAdd = {
                    id: productId,
                    quantity: 1,
                };
                cartToUpdate.products.push(prodToAdd);
            }else {
                productInCart.quantity++;
            }
            const cartsUpdated = carts.map((cart) => cart.id === cartId ? cartToUpdate :  cart);            
            await fs.promises.writeFile(this.path, JSON.stringify(cartsUpdated, null, '\t'));
        } catch (error) {
            console.error(error);
        }
    }



};

export default CartsManager;
