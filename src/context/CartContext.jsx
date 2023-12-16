import React, { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart);

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    console.log(totalCost);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, { ...item, quantity }]);
        } else {
            console.error("El Producto ya fue agregado");
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    };

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalCost  }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;