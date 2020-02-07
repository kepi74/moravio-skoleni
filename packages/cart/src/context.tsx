import * as React from "react";

interface CartContext {
  itemsCount: number;
}

export const initialContext: CartContext = {
  itemsCount: 4
};

const CartContext = React.createContext<CartContext>(initialContext);

export const CartProvider = CartContext.Provider;
export const CartConsumer = CartContext.Consumer;
export default CartContext;
