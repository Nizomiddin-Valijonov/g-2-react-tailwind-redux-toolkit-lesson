import React from "react";

function ProductCard({ product }) {
  return (
    <div className="rounded-xl overflow-hidden border-2 border-blue-500">
      <figure className="w-full h-[350px]">
        <img
          className="w-full h-full object-fill"
          src={product?.picture}
          alt={product?.brand}
        />
      </figure>

      <div className="py-3 px-4">
        <h2 className="text-xl font-medium leading-5">{product?.brand}</h2>
        <p className="text-sm ">{product?.model}</p>

        <div className="flex gap-2 items-center pt-2">
          <span className="text-lg text-blue-800 leading-4">
            {product?.price} so'm
          </span>
          <span className="decoration-solid line-through text-gray-300 leading-4">
            {product?.oldPrice} so'm
          </span>
        </div>

        <div className="text-purple-500 leading-5 text-sm pt-1">
          Monthly: {product?.monthlyPayment} so'm
        </div>

        <div
          className={`border-2 rounded-xl border-blue-700 mt-2 py-1 px-5 text-center ${product.inStock ? "bg-blue-200" : "bg-red-300"}`}
        >
          Instock : {product.inStock ? "HAVE" : "ENDED"}
        </div>

        <button className="w-full mt-2 bg-blue-500 text-white text-lg py-1 rounded-xl ">
          Savat
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
