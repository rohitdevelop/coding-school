 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
 import Register from './components/pages/Register'
import Login from './components/pages/login'
 
 const App = () => {
   return (
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
</Routes>
   )
 }
 
 export default App
 