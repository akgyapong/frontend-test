import React from 'react'
import { Link } from 'react-router-dom'
import error from '../assets/error.jpeg'

function Error() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
        <img src={error} alt="Error" />
        <Link to = '/'><button className="bg-blue-500 hover:bg-blue-400 text-white mt-2 px-4 py-2 rounded">Go to Home</button></Link>
    </div>
  )
}

export default Error






