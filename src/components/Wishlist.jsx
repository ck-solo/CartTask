import React, { useContext } from "react";
import { Store } from "./StoreContext";

function Wishlist() {
  const { wishlist, addWish , darkMode} = useContext(Store);

  return (
    <div className={`w-5/6 mt-10 p-8 rounded-2xl transition
${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>

      <h2 className="text-3xl font-bold mb-6">❤️ Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500 text-2xl">No items in wishlist</p>
      ) : (
        wishlist.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded-xl mb-4"
          >
            <div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-500">₹{item.price}</p>
            </div>

            <button
              onClick={() => addWish(item)}
              className="bg-gray-300 px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;
