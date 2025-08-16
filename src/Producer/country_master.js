import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getcountrylist = createAsyncThunk('country/getcountryinfo', async () => {
    const token = localStorage.getItem('admin_access_token');

    const getcountry = await axios.post('https://keepinbasket.ortdemo.com/api/getcountrylist', {}, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    return getcountry.data
})
const country_master = createSlice({
    name: "country",
    initialState: {
        list: [],
        country_status: 'idle'
    },
    extraReducers: (builder) => {
        builder.addCase(getcountrylist.pending, (state) => {
            state.country_status = 'pending'
        })
            .addCase(getcountrylist.fulfilled, (state, action) => {
                state.country_status = 'success',
                    state.list = action.payload
            })
            .addCase(getcountrylist.rejected, (state) => {
                state.country_status = 'rejected'
            })
    }
})

export default country_master.reducer