import { useState } from 'react'
import Layout from './components/layout/layout'
import Login from './components/pages/login'
import { Routes,Route } from 'react-router'
import { useLocation } from 'react-router'
import Dashboard from './components/pages/dashboard'
import Order_management from './components/pages/order_management'
import Customer_management from './components/pages/customer_management'
import Categories_master from './components/pages/Product_management/categories_master'
import Product_master from './components/pages/Product_management/product_master'
import Change_price from './components/pages/Product_management/change_price'
import Country_master from './components/pages/Product_management/country_master'
import Add_product from './components/pages/Product_management/add_product'


function App() {
  const location = useLocation()
  const adminLogin = location.pathname === '/admin'
  return (
    <>
      <Routes>
      <Route path="/admin" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order_management" element={<Order_management />} />
          <Route path='/customer_management' element={<Customer_management/>}/>
          <Route path='/categories_master' element={<Categories_master/>}/>
          <Route path='/product_master' element={<Product_master/>}/>
          <Route path='/country_master' element={<Country_master/>}/>
          <Route path='/change_price' element={<Change_price/>}/>
          <Route path='/add_product' element={<Add_product/>}/>
        </Route>
      </Routes>
     </>
  )
}

export default App
