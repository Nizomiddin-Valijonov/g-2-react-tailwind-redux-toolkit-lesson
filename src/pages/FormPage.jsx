import React, { useState } from "react";

function FormPage() {
  const [inputValue, setInputValue] = useState({
    brand: "",
    model: "",
    price: "",
    oldPrice: "",
    inStock: true,
    picture: "",
  });
  const [image, setImage] = useState("");
  return (
    <div className="bg-linear-to-r from-cyan-500 to-blue-400 w-full min-h-[92.9vh] flex items-center justify-center">
      <form action="" className="bg-white px-6 py-3 rounded-2xl w-[600px]">
        <h2 className="text-center text-2xl">Mahsulot qo'shish</h2>

        <div className="flex flex-col gap-1 mt-2">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            placeholder="Brandini kiriting"
            id="brand"
            className="border-2 border-blue-500 rounded-xl px-2 py-1.5"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <label htmlFor="model">Model</label>
          <input
            type="text"
            placeholder="Modelini kiriting"
            id="model"
            className="border-2 border-blue-500 rounded-xl px-2 py-1.5"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <label htmlFor="price">Yangi narx</label>
          <input
            type="text"
            placeholder="Narxini kiriting"
            id="price"
            className="border-2 border-blue-500 rounded-xl px-2 py-1.5"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <label htmlFor="old_price">Eski narx</label>
          <input
            type="text"
            placeholder="Eski narxini kiriting"
            id="old_price"
            className="border-2 border-blue-500 rounded-xl px-2 py-1.5"
          />
        </div>

        <div className="pt-3 flex items-start gap-2">
          <input
            type="file"
            accept=".png"
            id="rasm_input"
            onChange={(e) => {
              let file = e.target.files[0];

              if (file) {
                setImage(URL.createObjectURL(file));
              }
            }}
            className="hidden"
          />
          <label
            htmlFor="rasm_input"
            className="border-2 border-blue-500 w-[200px] h-[200px] inline-block rounded-2xl overflow-hidden"
          >
            <img src={image} alt="SELECTING IMAGE" />
          </label>
          <button className="bg-blue-500 px-4 py-1.5 rounded-xl text-white">
            Jo'natish
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
