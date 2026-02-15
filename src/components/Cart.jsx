import React, { useContext } from "react";
import { Store } from "./StoreContext";

function Cart() {
  const { cart, addCart, removeCart , darkMode } = useContext(Store);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const shipping = totalItems >= 4 ? 0 : 400;

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const finalTotal =  totalItems === 0 ? 0 : totalPrice + shipping;


  return (
    <div className={`w-5/6 mt-10 p-8 rounded-2xl transition
${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>

      <h2 className="text-3xl font-bold mb-6">🛒 Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-500 p-4 rounded-xl mb-4"
          >
            <div> 
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-500">
                  ₹{item.price} × {item.qty}
                </p>
                <p className="font-bold">₹{item.price * item.qty}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => removeCart(item)}
                className="bg-gray-300 px-3 py-1 rounded"
              >
                −
              </button>

              <span className="text-lg font-bold">{item.qty}</span>

              <button
                onClick={() => addCart(item)}
                className="bg-black text-white px-3 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>
        ))
      )}

      <div className="mt-6 border-t pt-4">
        <p className="text-xl font-bold">Total Items: {totalItems}</p>
        <p className="text-xl font-bold">Shipping: {shipping === 0 ? "Free 🚚" : `₹${shipping}`}</p>
      </div>

      <div className="mt-4 text-xl font-bold">
        Total Price: ₹{finalTotal}
      </div>
    </div>
  );
}

export default Cart;
