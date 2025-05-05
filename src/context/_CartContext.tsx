import { createContext } from "react";
import { ProductElement } from "../types/Product.types";

export const CartContext = createContext({
    cartData: [] as Array<ProductElement>,
    setCartData: (productArr: ProductElement[]) => { },
    addToCart: (product: ProductElement) => { },
    removeFromCart: (productID: number) => { },
    clearCart: () => { }
});