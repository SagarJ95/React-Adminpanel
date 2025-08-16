import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const dashboardlist = createAsyncThunk('dashboard/getdashboard', async () => {
    const token = localStorage.getItem('admin_access_token')

    const dashboardInfo = await axios.post('https://keepinbasket.ortdemo.com/api/dashboard', {}, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    return dashboardInfo.data
})


const dashboard = createSlice({
    name: "dashboard",
    initialState: {
        list: [],
        status: 'idle'
    },
    extraReducers: (builder) => {
        builder.addCase(dashboardlist.pending, (state) => {
            state.status = 'pending'
        })
            .addCase(dashboardlist.fulfilled, (state, action) => {
                state.status = 'fulfilled',
                    state.list = action.payload
            })
            .addCase(dashboardlist.rejected, (state) => {
                state.status = 'rejected'
            })
    }
})

export default dashboard.reducer