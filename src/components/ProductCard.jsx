import React, { useContext } from "react";
import { Store } from "./StoreContext";

function ProductCard({ product }) {
  const { addCart, addWish, wishlist } = useContext(Store);

  const isWished = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <div className="flex flex-col w-72 bg-white rounded-2xl
    shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
 
      <img
        src={product.img}
        alt={product.name}
        className="h-40 w-full object-cover"
      />
 
      <div className="p-5 flex flex-col gap-4">
        <h2 className="text-2xl font-bold ">{product.name}</h2>

        <p className="text-xl text-gray-500 font-semibold">
          ₹{product.price}
        </p>
 
        <div className="flex gap-2">
          <button
            onClick={() => addCart(product)}
            className="flex-1 bg-black text-2xl text-white py-2 rounded-xl hover:scale-105 transition"
          >
            Add
          </button>

          <button
            onClick={() => addWish(product)}
            className="flex-1 text-2xl bg-gray-400 rounded-xl hover:bg-gray-200 transition"
          >
            {isWished ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
