import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const customerlist = createAsyncThunk('customer/getcustomerlist', async () => {
    const token = localStorage.getItem('admin_access_token')
    let getcustomerInfo = await axios.post("https://keepinbasket.ortdemo.com/api/getCustomers", {}, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    return getcustomerInfo.data
})


const customerInfo = createSlice({
    name: "customer",
    initialState: {
        list: [],
        customer_status: 'idle'
    },
    extraReducers: (builder) => {
        builder.addCase(customerlist.pending, (state) => {
            state.customer_status = 'pending'
        })
            .addCase(customerlist.fulfilled, (state, action) => {
                state.customer_status = 'fulfilled',
                    state.list = action.payload
            })
            .addCase(customerlist.rejected, (state) => {
                state.customer_status = 'rejected'
            })
    }
})

export default customerInfo.reducer