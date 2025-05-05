import { createContext } from "react";
import { ProductElement } from "../types/Product.types";

export const CartContext = createContext({
    cartData: [] as Array<ProductElement>,
    setCartData: (productArr: ProductElement[]) => { console.log('Set cart data', productArr) },
    addToCart: (product: ProductElement) => {
        console.log('Add to cart', product)
    },
    removeFromCart: (productID: number) => {
        console.log('Remove from cart', productID)
    },
    clearCart: () => { }
});