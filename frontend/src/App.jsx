import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AdminRoute from './components/Routes/AdminRoute'
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
// import AdminDashboard from './components/Auth/'
// import './components/Admin/AdminDashboard'
import AdminDashboard from './components/Admin/AdminDashboard';
import CreateProduct from './components/Admin/CreateProduct';
import Catagogry from './components/Catagogry';
import Products from './components/Admin/Products';
import WorkeraRegistration from './components/WorkeraRegistration';
import Order from './components/Order';
import Massage from './components/Admin/Massage'
import Workers from './components/Admin/Workers';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Policy from './components/Policy';
import './App.css'

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/create-product" element={<CreateProduct />} />
            <Route path="admin/products" element={<Products />} />
            <Route path="admin/workers" element={<Workers />} />
            <Route path="admin/massage" element={<Massage />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cat" element={<Catagogry />} />
          <Route path="/worker" element={<WorkeraRegistration />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/con" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          
          
        </Routes>
    </>
  )
}

export default App
