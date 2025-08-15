import { configureStore } from "@reduxjs/toolkit";
import listorder from '../Producer/orderManagement'

const store = configureStore({
    reducer: {
        order_list: listorder
    }
})

export default store