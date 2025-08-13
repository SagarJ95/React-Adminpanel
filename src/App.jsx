import { useState } from 'react'
import Layout from './components/layout/layout'
import Login from './components/pages/login'
import { Routes,Route } from 'react-router'
import { useLocation } from 'react-router'
import Dashboard from './components/pages/dashboard'
function App() {
  const location = useLocation()
  const adminLogin = location.pathname === '/admin'
  return (
    <>
      <Routes>
      <Route path="/admin" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
        </>
  )
}

export default App
