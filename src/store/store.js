import { configureStore } from "@reduxjs/toolkit";
import listorder from '../Producer/orderManagement'
import category from '../Producer/category'
import product from '../Producer/product'
import changePrice from '../Producer/change_price'
import country_master from '../Producer/country_master'
import customerInfo from '../Producer/customerManagement'
import dashboardlist from "../Producer/dashboard";
const store = configureStore({
    reducer: {
        order_list: listorder,
        category_list: category,
        product_list: product,
        change_price_list: changePrice,
        country_master_list: country_master,
        customer_list: customerInfo,
        dashboardlist: dashboardlist
    }
})

export default store