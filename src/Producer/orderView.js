import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getOrderById = createAsyncThunk('order/orderViewDetails', async (id) => {
    const token = localStorage.getItem('admin_access_token');
    const getOrderByIdInfo = await axios.post(`${import.meta.env.VITE_API_URL}/api/orderViewDetails`, { order_id: id }, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    return getOrderByIdInfo.data.data[0]
})

const Orders = createSlice({
    name: "order",
    initialState: {
        list: [],
        single: "",
        single_order: "idle"
    },
    extraReducers: (builder) => {
        builder.addCase(getOrderById.pending, (state) => {
            state.single_order = "pending";
        })
            .addCase(getOrderById.fulfilled, (state, action) => {
                state.single_order = "success";
                state.single = action.payload;
            })
            .addCase(getOrderById.rejected, (state) => {
                state.single_order = "rejected";
            });
    }
})
export default Orders.reducer