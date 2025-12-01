import React, { useState } from 'react'
import Submenu from '../components/Submenu.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import {Link} from 'react-router-dom'
import shoppingbag from '../assets/shopping-bag.png'
import usericon from '../assets/user.png'
import searchicon from '../assets/search 2.png'
import gift from '../assets/Rectangle 178.png'
import phones from '../assets/iphone.png'
import appliances from '../assets/electric-appliance.png'
import kitchen from '../assets/kitchen.png'
import clothing from '../assets/male-clothes.png'
import sneaker from '../assets/sneakers.png'
import electronics from '../assets/electronic-devices.png'
import watch from '../assets/galaxy-watch.png'
import newbalance from '../assets/new-balance.png'
import xbox from '../assets/xbox.png'
import tag from '../assets/Vector (1).png'



function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubscribe = async () => {
    // simple client-side validation
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i
    if (!email || !re.test(email)) {
      setStatus('Please enter a valid email address.')
      return
    }

    try {
      // Persist locally for now — replace with API call if available
      const existing = JSON.parse(localStorage.getItem('subscribers') || '[]')
      if (!existing.includes(email)) {
        existing.push(email)
        localStorage.setItem('subscribers', JSON.stringify(existing))
      }
      setStatus('Thanks — you are subscribed!')
      setEmail('')
      setTimeout(() => setStatus(null), 4000)
    } catch (err) {
      setStatus('Something went wrong — please try again.')
    }
  }
  return (
    <div className='bg-gray-100 sm:hidden'>
      <nav>
        <div className='flex justify-between items-center p-4'>
          <h3 className='text-2xl'>Hi, Damar</h3>
          <div className='flex gap-4'>
          <Link to='/cart'><img className="w-5" src={shoppingbag} /></Link>
          <Link to='/login'><img className="w-5" src={usericon} /></Link>
          </div>
        </div>
        <div className='p-3 gap-4 flex flex-col'>
          <h3 className='text-base'>Ready to shop today?</h3>
          <div className='relative'>
            <input className="border p-2 pl-4 pr-10 rounded-full w-full h-10" type="search" name="" id="" placeholder='Search your desired item' />
            <img src={searchicon} alt="search icon" className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
          </div>
        </div>
      </nav>

      <div className = 'p-3'>
        <div className='p-6 h-36 bg-orange-200 rounded-3xl flex items-center'>
          <div className='flex-1 flex flex-col justify-center gap-2'>
            <h3 className='text-base'>Special Today</h3>
            <h1 className='text-2xl font-bold'>70% All items</h1>
            <Link to='/listing'><button className='py-2 px-6 bg-orange-400 rounded-full hover:bg-orange-400/80 duration-150'>Shop Now</button></Link>
          </div>
          <div className='w-28 h-28 flex items-center justify-center'>
            <img src={gift} alt="gift" className='w-full h-full object-contain'/>
          </div>
        </div>

      <div className = 'p-2 grid grid-cols-3 gap-3 mt-6'>
        <div className="bg-gray-200 flex flex-col gap-2 justify-center items-center border-1 border-gray-300 rounded-lg w-full h-28 shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
          <img className="w-12 h-12 object-contain" src={phones} alt="Phones" />
          <h3 className='text-sm cursor-default'>Phones</h3>
        </div>
        <div className="bg-gray-200 flex flex-col gap-2 justify-center items-center border-1 border-gray-300 rounded-lg w-full h-28 shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
          <img className="w-12 h-12 object-contain" src={appliances} alt="Appliances" />
          <h3 className='text-sm cursor-default'>Appliances</h3>
        </div>
            <div className="bg-gray-200 flex flex-col gap-2 justify-center items-center border-1 border-gray-300 rounded-lg w-full h-28 shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
          <img className="w-12 h-12 object-contain" src={kitchen} alt="Kitchen" />
          <h3 className='text-sm cursor-default'>Kitchen</h3>
        </div>
        <div className="bg-gray-200 flex flex-col gap-2 justify-center items-center border-1 border-gray-300 rounded-lg w-full h-28 shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
          <img className="w-12 h-12 object-contain" src={clothing} alt="Clothe" />
          <h3 className='text-sm cursor-default'>Clothing</h3>
        </div>
        <div className="bg-gray-200 flex flex-col gap-2 justify-center items-center border-1 border-gray-300 rounded-lg w-full h-28 shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
          <img className="w-12 h-12 object-contain" src={sneaker} alt="Footwear" />
          <h3 className='text-sm cursor-default'>Footwear</h3>
        </div>
        <div className="bg-gray-200 flex flex-col gap-2 justify-center items-center border-1 border-gray-300 rounded-lg w-full h-28 shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
          <img className="w-12 h-12 object-contain" src={electronics} alt="Electronics" />
          <h3 className='text-sm cursor-default'>Electronics</h3>
        </div>
      </div>
      <div className='bg-orange-400/90 w-full px-3 py-2 rounded-sm flex items-center justify-around mt-4 border-2 border-transparent'>
        <div>
          <h3 className='text-lg font-semibold text-gray-900'>Flash Deals</h3>
        </div>

        <div className='flex h-20 items-center gap-2'>
          <div className='bg-orange-500 text-white px-3 py-1 rounded-lg font-semibold'>12</div>
          <div className='text-white font-semibold'>:</div>
          <div className='bg-orange-500 text-white px-3 py-1 rounded-lg font-semibold'>05</div>
          <div className='text-white font-semibold'>:</div>
          <div className='bg-orange-500 text-white px-3 py-1 rounded-lg font-semibold'>07</div>
        </div>
      </div>

      <div className='bg-orange-400/90 w-full px-3 py-4 rounded-3xl mt-4 border-2 border-transparent text-center text-white'>
        <h3 className='text-gray-50/80 mb-4'>LIMITED TIME OFFER</h3>
        <h3 className='text-lg font-semibold'>FLASH SALE</h3>
        <p className='text-sm mb-3'>Get 40% off on selected items. Offer valid for <br /> 24 hours only!</p>
        <Link to='/listing'><button className='bg-white text-orange-400 px-4 py-2 w-40 rounded-full font-semibold cursor-pointer'>View Deals</button></Link>
      </div>
      <div>
        <div className="h-65 flex gap-4 mt-5 overflow-x-auto">
          <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
            <img className='w-15 h-20 object-contain' src={watch} alt="Samsung Galaxy Watch" />
            <h2 className=''>Samsung Galaxy Watch</h2>
            <h3 className='text-lg font-bold font-mono'>GH 3,500.00</h3>
            <button className='bg-orange-400 text-white py-2 w-24 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-orange-400 transition duration-150'>
              Buy Now
            </button>
          </div>
          <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
            <img className='w-15 h-20 object-contain' src={xbox} alt="Xbox Series X" />
            <h2>Xbox Series X</h2>
            <h3 className='text-lg font-bold font-mono'>GH 2,500.00</h3>
            <button className='bg-orange-400 text-white py-2 w-24 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-orange-400 transition duration-150'>
              Buy Now
            </button>
          </div>
          <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
            <img className='w-15 h-20 object-contain'src={newbalance} alt="New Balance Shoes" />
            <h2>New Balance Shoes</h2>
            <h3 className='text-lg font-bold font-mono'>GH 500.00</h3>
            <button className='bg-orange-400 text-white py-2 w-24 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-orange-400 transition duration-150'>
              Buy Now
            </button>
          </div>
        </div>

        <div className='mt-6'>
          <h3 className='font-bold'>You might like this</h3>
          <div className="h-65 flex gap-4 mt-5 overflow-x-auto">
          
          <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
            <img className='w-15 h-20 object-contain' src={watch} alt="Samsung Galaxy Watch" />
            <h2 className=''>Samsung Galaxy Watch</h2>
            <h3 className='text-lg font-bold font-mono'>GH 3,500.00</h3>
            <button className='bg-orange-400 text-white py-2 w-24 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-orange-400 transition duration-150'>
              Buy Now
            </button>
          </div>
          <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
            <img className='w-15 h-20 object-contain' src={xbox} alt="Xbox Series X" />
            <h2>Xbox Series X</h2>
            <h3 className='text-lg font-bold font-mono'>GH 2,500.00</h3>
            <button className='bg-orange-400 text-white py-2 w-24 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-orange-400 transition duration-150'>
              Buy Now
            </button>
          </div>
          <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
            <img className='w-15 h-20 object-contain' src={newbalance} alt="New Balance Shoes" />
            <h2>New Balance Shoes</h2>
            <h3 className='text-lg font-bold font-mono'>GH 500.00</h3>
            <button className='bg-orange-400 text-white py-2 w-24 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-orange-400 transition duration-150'>
              Buy Now
            </button>
          </div>
          </div>
        </div>

        <div className='mt-6'>
          <h3 className='font-bold'>Featured Products</h3>
          <div className="h-65 flex gap-4 mt-5 overflow-x-auto">
          
          <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
            <img className='w-15 h-20 object-contain' src={watch} alt="Samsung Galaxy Watch" />
            <h2 className=''>Samsung Galaxy Watch</h2>
            <h3 className='text-lg font-bold font-mono'>GH 3,500.00</h3>
            <button className='bg-orange-400 text-white py-2 w-24 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-orange-400 transition duration-150'>
              Buy Now
            </button>
          </div>
          <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
            <img className='w-15 h-20 object-contain' src={xbox} alt="Xbox Series X" />
            <h2>Xbox Series X</h2>
            <h3 className='text-lg font-bold font-mono'>GH 2,500.00</h3>
            <button className='bg-orange-400 text-white py-2 w-24 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-orange-400 transition duration-150'>
              Buy Now
            </button>
          </div>
          <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
            <img className='w-15 h-20 object-contain' src={newbalance} alt="New Balance Shoes" />
            <h2>New Balance Shoes</h2>
            <h3 className='text-lg font-bold font-mono'>GH 500.00</h3>
            <button className='bg-orange-400 text-white py-2 w-24 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-orange-400 transition duration-150'>
              Buy Now
            </button>
          </div>
          </div>
        </div>

        <div className='mt-6'>
          <h3 className='font-bold'>Recently Viewed</h3>
          <div className="h-65 flex gap-4 mt-5 overflow-x-auto">
          
          <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
            <img className='w-15 h-20 object-contain' src={watch} alt="Samsung Galaxy Watch" />
            <h2 className=''>Samsung Galaxy Watch</h2>
            <h3 className='text-lg font-bold font-mono'>GH 3,500.00</h3>
            <button className='bg-orange-400 text-white py-2 w-24 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-orange-400 transition duration-150'>
              Buy Now
            </button>
          </div>
          <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
            <img className='w-15 h-20 object-contain' src={xbox} alt="Xbox Series X" />
            <h2>Xbox Series X</h2>
            <h3 className='text-lg font-bold font-mono'>GH 2,500.00</h3>
            <button className='bg-orange-400 text-white py-2 w-24 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-orange-400 transition duration-150'>
              Buy Now
            </button>
          </div>
          <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md hover:border-1 hover:bg-orange-400 hover:text-white transition duration-150">
            <img className='w-15 h-20 object-contain' src={newbalance} alt="New Balance Shoes" />
            <h2>New Balance Shoes</h2>
            <h3 className='text-lg font-bold font-mono'>GH 500.00</h3>
            <button className='bg-orange-400 text-white py-2 w-24 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-orange-400 transition duration-150'>
              Buy Now
            </button>
          </div>
          </div>
        </div>

        <div>
          <div className='mt-10 text-center'>
            <h3 className='font-semibold text-2xl'>Why Shop With Us?</h3>
          </div>
          <div className='grid grid-cols-2 w-full p-3 h-80 text-center gap-4 mt-5'>
          
            <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md transition duration-150">
              <div className='bg-blue-400 h-20 w-20 rounded-lg'></div>
              <h3 className='font-bold'>Free Delivery</h3>
              <h3>On orders above GHS 100</h3>
            </div>
              <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md transition duration-150">
              <div className='bg-green-300/80 h-20 w-20 rounded-lg'></div>
              <h3 className='font-bold'>Secure Payment</h3>
              <h3>100% secure transactions</h3>
            </div>
            <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md transition duration-150">
              <div className='bg-orange-200 h-20 w-20 rounded-lg'></div>
              <h3 className='font-bold'>Easy Returns</h3>
              <h3>7-day return policy</h3>
            </div>
            <div className="p-3 bg-gray-200 flex flex-col gap-2 justify-around items-center border-1 border-gray-300 rounded-lg w-full h-full shadow-sm hover:shadow-md transition duration-150">
              <div className='bg-pink-400 h-20 w-20 rounded-lg'></div>
              <h3 className='font-bold'>24/7 support</h3>
              <h3>Always here to help</h3>
            </div>

          </div>
        </div>

        <div className='bg-orange-400/90 p-6 h-80 text-white w-full rounded-lg flex flex-col items-center justify-around mt-30'>
          <img src={tag} alt="Tag" />
          <h3 className='text-xl'>Get Exclusive Deals</h3>
          <p className='text-start text-lg'>Subscribe to our newsletter and never miss out on amazing offers</p>
          <div className='flex gap-2 mt-3 w-full'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='w-full rounded-sm p-3 border-2 border-white focus:ou-white text-black'
            />
            <button
              onClick={handleSubscribe}
              disabled={!email}
              className='w-full bg-white text-orange-400 rounded-sm p-3 hover:bg-white/70'
            >
              Subscribe
            </button>
          </div>
          {status && <p className='text-sm mt-2 text-white/90'>{status}</p>}
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home