import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { prodAPI } from "../../api/api";



export const fetchProduct = createAsyncThunk(
    'fetchProduct',
    async (id, {dispatch}) => {
       const res = await prodAPI.getOne(id)
       return res.data
    }
)

const productSlice = createSlice({
    name : 'prodSlice',
    initialState: {
        product: {},
        isFalse : false
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchProduct.pending,(state, action)=> {
               state.isFalse = true
            }
        ),
        builder.addCase(
            fetchProduct.fulfilled,(state, action)=> {
               state.isFalse = false
               state.product = action.payload
            }
        )
    }
}) 
export default productSlice.reducer