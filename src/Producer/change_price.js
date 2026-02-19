import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const changePriceList = createAsyncThunk('changePrice/getchangeprice', async () => {
    const token = localStorage.getItem('admin_access_token')

    const change_price = await axios.post(`${import.meta.env.VITE_API_URL}/api/getChangePriceProductlist`, {}, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })

    return change_price.data;
})
const changePrice = createSlice({
    name: "changePrice",
    initialState: {
        list: [],
        changeprice_status: 'idle'
    },
    extraReducers: (builder) => {
        builder.addCase(changePriceList.pending, (state) => {
            state.changeprice_status = 'pending'
        })
            .addCase(changePriceList.fulfilled, (state, action) => {
                state.changeprice_status = 'success',
                    state.list = action.payload
            })
            .addCase(changePriceList.rejected, (state) => {
                state.changeprice_status = 'rejected'
            })
    }
})

export default changePrice.reducer