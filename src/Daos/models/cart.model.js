import { Schema, model } from "mongoose"; 


export const cartcolection = "carts";

export const cartSchema = new Schema({
        products: { type: Array, required: true },
    });
    
    
export const CartModel = model(cartcolection, cartSchema);