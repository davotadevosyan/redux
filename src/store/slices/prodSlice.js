import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { prodAPI } from "../../api/api";



export const fetchProd = createAsyncThunk(
    'fetchProd',
    async (_, {dispatch}) => {
       const res = await prodAPI.getAll()
       return res.data
    }
)

const prodSlice = createSlice({
    name : 'prodSlice',
    initialState: {
        products: [],
        isFalse : false
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchProd.pending,(state, action)=> {
               state.isFalse = true
            }
        ),
        builder.addCase(
            fetchProd.fulfilled,(state, action)=> {
               state.isFalse = false
               state.products = action.payload
            }
        )
    }
}) 
export default prodSlice.reducer