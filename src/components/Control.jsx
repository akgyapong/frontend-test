import React from 'react'
import home from '../assets/home.svg'
import message from '../assets/message.svg'
import order from '../assets/receipt-text.svg'
import profile from '../assets/profile.svg'




function Control() {
  return (
    <div className="p-4 flex bg-gray-200 w-full justify-evenly shadow-lg sm:hidden">
        <div className="flex flex-col items-center">
            <img className="w-6" src={home} alt="" />
            <a className="hover:text-blue-900 hover:font-semibold transition duration-250" href="/home"><h3>Home</h3></a>
        </div>
        <div className="flex flex-col items-center">
            <img className="w-6" src={order} alt="" />
            <a className="hover:text-blue-900 hover:font-semibold transition duration-250" href="/order"><h3>My Order</h3></a>
        </div>
        <div className="flex flex-col items-center">
            <img className="w-6" src={message} alt="" />
            <a className="hover:text-blue-900 hover:font-semibold transition duration-250" href="/messages"><h3>Messages</h3></a>
        </div>
        <div className="flex flex-col items-center">
            <img className="w-6" src={profile} alt="" />
            <a className="hover:text-blue-900 hover:font-semibold transition duration-250" href="/profile"><h3>Profile</h3></a>
        </div>
    </div>
  )
}

export default Control