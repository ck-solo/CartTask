import React, { useContext } from "react";
import { Store } from "./StoreContext";

function Navbar({ toggleCart }) {
  const { cart, wishlist, toggleTheme, darkMode } = useContext(Store);

  return (
    <div className="flex flex-col md:flex-row w-full md:w-5/6 justify-between items-center px-4 md:px-8 py-4 md:py-5 mb-10
      bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl mx-auto">

      
      <div className="flex gap-2 md:gap-3 items-center mb-4 md:mb-0">
        <i className="ri-shopping-cart-fill text-3xl md:text-4xl text-purple-600"></i>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          WishCart
        </h2>
      </div>

      
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center w-full sm:w-auto">
        <button
          onClick={toggleCart}
          className="w-full sm:w-auto px-4 sm:px-5 py-2 rounded-xl text-lg sm:text-2xl bg-purple-500 text-white font-semibold hover:scale-105 transition"
        >
          🛒 Cart ({cart.length})
        </button>

        <button
          className="w-full sm:w-auto px-4 sm:px-5 py-2 rounded-xl text-lg sm:text-2xl bg-pink-500 text-white font-semibold hover:scale-105 transition"
        >
          ❤️ Wishlist ({wishlist.length})
        </button>

        <button
          onClick={toggleTheme}
          className="w-full sm:w-auto px-4 sm:px-5 py-2 rounded-xl text-lg sm:text-xl bg-gray-500 hover:bg-gray-300 transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
