import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 1,
      picture:
        "https://images.uzum.uz/d3ededa1146soq7cf6e0/t_product_540_high.jpg",
      brand: "Rolex",
      model: "Classic",
      price: 81000,
      oldPrice: 90000,
      currency: "UZS",
      monthlyPayment: 6375,
      rating: 4.9,
      inStock: true,
      warrantyYears: 1,
      seller: {
        name: "Uzum Market",
        verified: true,
      },
    },
    {
      id: 2,
      picture: "https://images.uzum.uz/cpvq0sr5qt1gj8dddqsg/original.jpg",
      brand: "LIVE",
      model: "Classic",
      price: 45.5,
      oldPrice: 45.999,
      currency: "UZS",
      monthlyPayment: 3000,
      rating: 4.7,
      inStock: false,
      warrantyYears: 1,
      seller: {
        name: "Uzum Market",
        verified: true,
      },
    },
    {
      id: 3,
      picture: "https://images.uzum.uz/d56i7ebtqdhjp1vchnbg/original.jpg",
      brand: "Gucci",
      model: "Classic",
      price: 51.5,
      oldPrice: 350.0,
      currency: "UZS",
      monthlyPayment: 4000,
      rating: 4.7,
      inStock: true,
      warrantyYears: 1,
      seller: {
        name: "Uzum Market",
        verified: true,
      },
    },

    {
      id: 4,
      picture: "https://images.uzum.uz/d2nc4d34eu2h0tmp6g70/original.jpg",
      brand: "Gucci",
      model: "Classic",
      price: 35.0,
      oldPrice: 69.0,
      currency: "UZS",
      monthlyPayment: 2.375,
      rating: 4.8,
      inStock: false,
      warrantyYears: 1,
      seller: {
        name: "Uzum Market",
        verified: true,
      },
    },

    {
      id: 5,
      picture: "https://images.uzum.uz/d5rota6j76og35gktgv0/original.jpg",
      brand: "Sabr",
      model: "Classic",
      price: 48.5,
      oldPrice: 53.99,
      currency: "UZS",
      monthlyPayment: 3.8,
      rating: 4.8,
      inStock: true,
      warrantyYears: 1,
      seller: {
        name: "Uzum Market",
        verified: true,
      },
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state) => {
      console.log(state);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
