import React, { createContext, useState } from "react";

export const Store = createContext();

function StoreContext({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.name === product.name);

      if (exist) {
        // increase quantity
        return prev.map((item) =>
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      // add new product
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.name === product.name);

      if (exist.qty === 1) {
        // remove completely
        return prev.filter((item) => item.name !== product.name);
      }

      // decrease quantity
      return prev.map((item) =>
        item.name === product.name ? { ...item, qty: item.qty - 1 } : item,
      );
    });
  };

  const addWish = (product) => {
    setWishlist((prev) => {
      const alreadyExist = prev.find((item) => item.id === product.id);
      if (alreadyExist) {
        setWishlist(wishlist.filter((item) => item.id !== product.id));
      } else {
        setWishlist([...prev, product]);
      }
    });
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <Store.Provider
      value={{ cart, addCart, wishlist, addWish, removeCart, darkMode ,toggleTheme }}
    >
      {children}
    </Store.Provider>
  );
}

export default StoreContext;
