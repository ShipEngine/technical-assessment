import React, { useCallback, useEffect, useState } from "react";
import { Product } from "../types";

interface Cart {
  addProduct: (product: Product) => void;
  containsProduct: (product: Product) => boolean;
  products: Product[];
}

interface CartProviderProps {
  children: React.ReactNode;
}

const saveCart = (products: Product[]) => {
  localStorage.setItem("products", JSON.stringify(products));
};

const loadCart = () => {
  const serializedProducts = localStorage.getItem("products");
  if (serializedProducts) return JSON.parse(serializedProducts);
  return [];
};

const CartContext = React.createContext<Cart | undefined>(undefined);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useState<Product[]>(loadCart());

  const containsProduct = useCallback(
    (product: Product) => {
      return products.map((p) => p.id).includes(product.id);
    },
    [products]
  );

  const addProduct = useCallback(
    (product: Product) => {
      if (!containsProduct(product)) {
        setProducts([...products, product]);
      }
    },
    [setProducts, products, containsProduct]
  );

  useEffect(() => {
    saveCart(products);
  }, [products]);

  return (
    <CartContext.Provider value={{ products, addProduct, containsProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => React.useContext(CartContext);
