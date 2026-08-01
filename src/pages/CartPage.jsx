import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

function CartPage() {
  const cartProducts = useSelector((state) => state.products.cart);
  console.log(cartProducts);

  return (
    <div className="px-4 pt-5">
      <h2 className="text-2xl font-bold">Products in your cart</h2>

      {cartProducts.length ? (
        <div className="grid grid-cols-4 gap-4 pt-2">
          {cartProducts.map((el) => (
            <ProductCard product={el} />
          ))}
        </div>
      ) : (
        <div className="text-center text-blue-500 text-3xl">
          Siz mahsulot tanlamadingiz!!!
        </div>
      )}
    </div>
  );
}

export default CartPage;
