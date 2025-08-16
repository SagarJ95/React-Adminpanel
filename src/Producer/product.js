import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getproductlist = createAsyncThunk('product/getproductlist', async () => {
    const token = localStorage.getItem('admin_access_token');

    const getproductinfo = await axios.post('https://keepinbasket.ortdemo.com/api/getProductlist', {}, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    return getproductinfo.data
})
const product = createSlice({
    name: "product",
    initialState: {
        list: [],
        product_status: 'idle'
    },
    extraReducers: (builder) => {
        builder.addCase(getproductlist.pending, (state) => {
            state.product_status = 'pending'
        })
            .addCase(getproductlist.fulfilled, (state, action) => {
                state.product_status = 'success',
                    state.list = action.payload
            })
            .addCase(getproductlist.rejected, (state) => {
                state.product_status = 'rejected'
            })
    }
})

export default product.reducer