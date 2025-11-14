import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/shopping-bag.png'
import user from '../assets/user.png'
import menu from '../assets/menu.png'

function Navbar() {
  return (
    <>
    <nav className='bg-gray-100 w-full h-20 border-b-2 border-indigo-600 flex justify-evenly items-center sm:hidden'>
        <div className='text-black font-mono font-semibold text-xl'>Shopwice</div>
        <div>
            <input type="search" name="search" id="search" placeholder="Search...." className='w-30 border-2 border-gray-900 p-3 cursor-default outline-none rounded-full text-sm hover:bg-gray-400' />
        </div>
        <div>
            <div className='relative inline-block'>
            <Link to="/cart">
                <img src={cart} alt="Cart" className='w-5 h-5 inline-block relative'/>
                <div className='absolute top-1 right-0 bg-red-500 text-white text-xs rounded-full px-1 w-2 h-2 animate-ping'></div>

                </Link>
            </div>
            
            <Link to="/login" className='ml-6'>
                <img src={user} alt="User" className='w-5 h-5 inline-block'/>
            </Link>

            <img src={menu} alt="Menu" className='w-5 h-5 inline-block ml-6 cursor-pointer' onClick={() => {
                const menu = document.getElementById('mobile-menu');
                if (menu.style.display === 'flex') {
                    menu.style.display = 'none';
                } else {
                    menu.style.display = 'flex';
                }
            }} />
            
        </div>
         
    </nav>
    <div id="mobile-menu" className="bg-gray-50 w-full h-67 flex-col font-mono justify-center items-end hidden">
        <Link to="/"><button className='bg-gray-50 p-2 w-screen text-orange-800 cursor-pointer'>Electronics</button></Link>
        <Link to="/"><button className='bg-orange-900  transition duration-200 p-2 w-screen text-white cursor-pointer'>Home Appliances</button></Link>
        <Link to="/"><button className='bg-gray-50 p-2 w-screen text-orange-800 cursor-pointer'>Shoes</button></Link>
        <Link to="/"><button className='bg-orange-900  transition duration-200 p-2 w-screen text-white cursor-pointer'>Perfumes</button></Link>
        <Link to="/about"><button className='bg-gray-50 p-2 w-screen text-orange-800 cursor-pointer'>About Us</button></Link>
        <Link to="/contact"><button className='bg-orange-900  transition duration-200 p-2 w-screen text-white cursor-pointer'>Contact Us</button></Link>
    </div>
    </>
  )
}

export default Navbar