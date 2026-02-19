import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const categorylist = createAsyncThunk('category/getcategorylist', async () => {
    const token = localStorage.getItem('admin_access_token');

    const getlist = await axios.post(`${import.meta.env.VITE_API_URL}/api/getCategories`, {}, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    return getlist.data
})
const category = createSlice({
    name: "category",
    initialState: {
        list: [],
        category_status: 'idle'
    },
    extraReducers: (builder) => {
        builder.addCase(categorylist.pending, (state) => {
            state.category_status = 'pending'
        })
            .addCase(categorylist.fulfilled, (state, action) => {
                state.category_status = "success",
                    state.list = action.payload
            })
            .addCase(categorylist.rejected, (state) => {
                state.category_status = 'rejected'
            })
    }
})

export default category.reducer