import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Footer from './components/Footer.jsx'
import Control from './components/Control.jsx'
import Submenu from './components/Submenu.jsx'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Contact from './pages/ContactUs.jsx'
import Error from './pages/Error.jsx'
import ProductListing from './pages/ProductListing.jsx'
import Cart from './pages/Cart.jsx'
import ForgotPassword from './pages/ForgetPassword.jsx'
import ResetInstructions from './pages/ResetInstructions.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/control" element={<Control />} />
      <Route path="/submenu" element={<Submenu />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/listing" element={<ProductListing />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-instructions" element={<ResetInstructions />} />
    </Routes>
  )
}

export default App