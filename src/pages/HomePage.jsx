import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

function HomePage() {
  const products = useSelector((state) => state.products.value);
  // const [products, setProducts] = useState([]);
  return (
    <main className="px-4 pt-3">
      <h2 className="text-2xl font-bold">Products</h2>

      <div className="grid gap-2.5 grid-cols-5 pt-3">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
