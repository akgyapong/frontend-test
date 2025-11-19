import React from 'react'
import shoe from '../assets/running-shoe.png'
import perfume from '../assets/perfume.png'
import electronics from '../assets/electric-appliance.png'
import gaming from '../assets/joystick.png'
import accessories from '../assets/accessories.png'
import appliance from '../assets/bookshelf.png'



function Submenu() {
  return (
    <div className="grid grid-cols-3 justify-center w-full h-full bg-gray-400 sm:hidden p-10 gap-4 ">
        <div className="bg-white rounded-full border-5 border-blue-900 cursor-pointer flex flex-col items-center justify-center w-25 h-20 p-6 hover:bg-blue-900 hover:text-white transition duration-200 shadow-lg shadow-gray-900/90">
            <img className="w-8 h-12" src={shoe} alt="Running Shoe" />
            <span className='text-sm'>Shoes</span>
        </div>
        <div className="bg-white rounded-full border-5 border-blue-900 cursor-pointer flex flex-col items-center justify-center w-25 h-20 p-6 hover:bg-blue-900 hover:text-white transition duration-200 shadow-lg shadow-gray-900/90">
            <img className="w-8 h-12" src={perfume} alt="Perfume" />
            <span className='text-sm'>Perfumes</span>
        </div>
        <div className="bg-white rounded-full border-5 border-blue-900 cursor-pointer flex flex-col items-center justify-center w-25 h-20 p-6 hover:bg-blue-900 hover:text-white transition duration-200 shadow-lg shadow-gray-900/90">
            <img className="w-8 h-12" src={electronics} alt="Electronics" />
            <span className='text-sm'>Electronics</span>
        </div>
        <div className="bg-white rounded-full border-5 border-blue-900 cursor-pointer flex flex-col items-center justify-center w-25 h-20 p-6 hover:bg-blue-900 hover:text-white transition duration-200 shadow-lg shadow-gray-900/90">
            <img className="w-8 h-12" src={appliance} alt="Home Appliances" />
            <span className='text-sm'>Appliances</span>
        </div>
        <div className="bg-white rounded-full border-5 border-blue-900 cursor-pointer flex flex-col items-center justify-center w-25 h-20 p-6 hover:bg-blue-900 hover:text-white transition duration-200 shadow-lg shadow-gray-900/90">
            <img className="w-8 h-12" src={gaming} alt="Gaming" />
            <span className='text-sm'>Gaming</span>
        </div>
        <div className="bg-white rounded-full border-5 border-blue-900 cursor-pointer flex flex-col items-center justify-center w-25 h-20 p-6 hover:bg-blue-900 hover:text-white transition duration-200 shadow-lg shadow-gray-900/90">
            <img className="w-8 h-12" src={accessories} alt="Accessories" />
            <span className='text-sm'>Accessories</span>
        </div>
    </div>
  )
}
export default Submenu