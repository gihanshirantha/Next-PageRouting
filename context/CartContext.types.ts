import { Product } from "../models/Product";

export interface CartContextProps {
    cart: Product[];
    total: number;
    itemAmount: number;
    addToCart: (products: Product, id: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    increaseAmount: (id: number) => void;
    decreaseAmount: (id: number) => void;
  }