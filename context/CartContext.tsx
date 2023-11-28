import React, { createContext, useState, useEffect, useContext } from "react";
import { Product } from "../models/Product";
import { CartContextProps } from "./CartContext.types";

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [itemAmount, setItemAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  //Total Price
  useEffect(() => {
    const newTotal = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  //Update Item Amount
  useEffect(() => {
    if (cart) {
      const amount: number = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  //add to cart
  const addToCart = (products: Product, id: number) => {
    const newItem = { ...products, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //remove item from cart

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  //clear cart
  const increaseAmount = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      addToCart(cartItem, id);
    }
  };

  //decrease Amount
  const decreaseAmount = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);

      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        itemAmount,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): CartContextProps => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return { ...context };
};

export { CartProvider, useCart };
