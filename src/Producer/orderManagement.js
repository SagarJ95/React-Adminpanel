import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const orderlist = createAsyncThunk('order/getorderlist', async ({ order_status }) => {
    const token = localStorage.getItem('admin_access_token')

    const body = {
        order_status: order_status
    }

    let getorderInfo = await axios.post("https://keepinbasket.ortdemo.com/api/getOrderlist", body, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    return getorderInfo.data
})


const orderInfo = createSlice({
    name: "order",
    initialState: {
        list: [],
        order_status: 'idle'
    },
    extraReducers: (builder) => {
        builder.addCase(orderlist.pending, (state) => {
            state.order_status = 'pending'
        })
            .addCase(orderlist.fulfilled, (state, action) => {
                state.order_status = 'fulfilled',
                    state.list = action.payload
            })
            .addCase(orderlist.rejected, (state) => {
                state.order_status = 'rejected'
            })
    }
})

export default orderInfo.reducer