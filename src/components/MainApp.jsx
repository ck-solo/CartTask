import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import { Store } from "./StoreContext";

function MainApp() {
  const [showCart, setShowCart] = useState(false);
  const { darkMode } = useContext(Store);

  return (
    <div
      className={`min-h-screen px-4 md:px-10 py-10 flex flex-col items-center transition-all duration-300
      ${
        darkMode
          ? "bg-gray-900 text-white"
          : " bg-amber-400 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <Navbar toggleCart={() => setShowCart(!showCart)} />

        <Product />

        <Wishlist />

        {showCart && <Cart />}
      </div>
    </div>
  );
}

export default MainApp;
