import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getproductlist = createAsyncThunk('product/getproductlist', async () => {
    const token = localStorage.getItem('admin_access_token');

    const getproductinfo = await axios.post(`${import.meta.env.VITE_API_URL}/api/getProductlist`, {}, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    return getproductinfo.data
})

export const getProductById = createAsyncThunk('product/getProductById', async (id) => {
    const token = localStorage.getItem('admin_access_token');
    const getProductByIdinfo = await axios.post(`${import.meta.env.VITE_API_URL}/api/getProductById`, { id: id }, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    return getProductByIdinfo.data.data[0]
})
const product = createSlice({
    name: "product",
    initialState: {
        list: [],
        single: null,
        product_status: 'idle',
        single_product_status: "idle",
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

        // Product by ID
        builder
            .addCase(getProductById.pending, (state) => {
                state.single_product_status = "pending";
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.single_product_status = "success";
                state.single = action.payload; // save product details
            })
            .addCase(getProductById.rejected, (state) => {
                state.single_product_status = "rejected";
            });
    }
})

export default product.reducer