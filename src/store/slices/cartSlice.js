import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { prodAPI } from "../../api/api";



export const fetchCart = createAsyncThunk(
    'fetchCart',
    async (id, {dispatch}) => {
       const res = await prodAPI.getCart(id)
       return res.data
    }
)

const cartSlice = createSlice({
    name : 'cartSlice',
    initialState: {
        cart: [],
        isFalse : false,
        
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchCart.pending,(state, action)=> {
               state.isFalse = true
            }
        ),
        builder.addCase(
            fetchCart.fulfilled,(state, action)=> {
                
               state.isFalse = false
               state.cart = action.payload
            }
        )
    }
}) 
export default cartSlice.reducer