import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div></div>
      <div className="flex justify-around mb-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">Quick Links</h1>
          <Link to="/" className="hover:underline">Shop</Link>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/" className="hover:underline">About Us</Link>
          <Link to="/" className="hover:underline">Contact Us</Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">Customer Service</h1>
          <Link to="/" className="hover:underline">Terms</Link>
          <Link to="/" className="hover:underline">Privacy</Link>
          <Link to="/" className="hover:underline">Support</Link>
          <Link to="/" className="hover:underline">Payment</Link>
        </div>
      </div>
    <div>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Shopwice. All rights reserved.</p>
      </div>
    </div>
    </footer>
  )
}

export default Footer