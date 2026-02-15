import React, { useContext } from "react";
import { Store } from "./StoreContext";
import ProductCard from "./ProductCard";

function Product() {
 

  const products = [
    { id: 1, name: "Keyboard", price: 1200, img:"https://picsum.photos/300?1" },
    { id: 2, name: "Mouse", price: 800, img:"https://picsum.photos/300?2" },
    { id: 3, name: "Speaker", price: 1500, img:"https://picsum.photos/300?3" },
    { id: 4, name: "Graphic Card", price: 25000, img:"https://picsum.photos/300?4" },
    { id: 5, name: "Monitor", price: 3500, img:"https://picsum.photos/300?5" },
    { id: 6, name: "Charger", price: 4500, img:"https://picsum.photos/300?6" },
  ];

  return (
    <div className="w-5/6 flex flex-col gap-10">
      <h2 className="text-4xl font-bold">Products</h2>

     
      <div className="flex flex-wrap gap-10 justify-center">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Product;
