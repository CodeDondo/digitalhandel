import { ReactNode, useState } from 'react'
import { ProductElement } from '../types/Product.types';
import { CartContext } from './_CartContext';

// Der skal være ene funktion til at tilføje produkter

// Der skal være en funktion til at fjerne produkter

// Der skal være en funktion til at tømme carten

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cartData, setCartData] = useState<Array<ProductElement>>([])

    const addToCart = (product: ProductElement) => {
        const productWithQuantity = { ...product, quantity: 1 }
        const clone = [...cartData]


        if (cartData.some((item) => item.id === product.id)) {
            const index = cartData.findIndex((item) => item.id === product.id)
            if (clone[index].quantity) {
                clone[index].quantity += 1
            }

            console.log('Updated cart: ', clone)
             setCartData(clone)
            return
        } else {

            clone.push(productWithQuantity)
            setCartData(clone)
        }
    }

    const removeFromCart = (productID: number) => {
        const clone = [...cartData]
        if (cartData.some((item) => item.id === productID)) {
            const index = cartData.findIndex((item) => item.id === productID)
            if (clone[index].quantity) {
                clone[index].quantity -= 1
                if (clone[index].quantity === 0) {
                    clone.splice(index, 1)
                }
            }
            console.log('Updated cart: ', clone)
            setCartData(clone)

        }
    }

    const clearCart = () => {
        setCartData([])

    }


    return (
        <CartContext.Provider value={{ cartData, setCartData, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
    )
}