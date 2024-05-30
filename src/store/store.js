import { configureStore } from "@reduxjs/toolkit";
import prodSlice from "./slices/prodSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";


const store = configureStore({
   reducer: {
    prodData: prodSlice,
    productData : productSlice,
    cartData : cartSlice
   }
})

export default store