import React, { useCallback, useEffect, useState } from "react";

const saveCart = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

const loadCart = () => {
  const serializedProducts = localStorage.getItem("products");
  if (serializedProducts) return JSON.parse(serializedProducts);
  return [];
};

const CartContext = React.createContext(undefined);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(loadCart());

  const containsProduct = useCallback(
    (product) => {
      return products.map((p) => p.id).includes(product.id);
    },
    [products]
  );

  const addProduct = useCallback(
    (product) => {
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
