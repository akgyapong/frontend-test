import { useState } from 'react'
import arrow from '../assets/arrow-left.svg'
import google from '../assets/Google Icon.svg'


function Login() {
  const [mode, setMode] = useState('signup') // 'signup' | 'signin'

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white p-4">
      <div className="bg-sky-600 rounded-xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl p-6">
        <div className="mb-4 flex items-center">
          <a href="#" className="p-1 rounded hover:bg-blue-400"><img src={arrow} alt="arrow left" className="w-6 h-6"/></a>
        </div>

        <div className="mb-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium font-sans mb-1">Welcome to Shopwice</h1>
          <h3 className="text-sm sm:text-md text-gray-100 font-light">Get great experience with Shopwice</h3>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg">
          {/* Toggle buttons with animated background */}
          <div className="relative bg-gray-100 rounded-3xl p-1 mb-6">
            <div className="relative flex">
              {/* animated pill */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 bg-white rounded-3xl h-10 w-1/2 transition-all duration-300 ease-in-out ${mode === 'signup' ? 'left-1' : 'left-1/2'}`}
                aria-hidden
              />

              <button
                onClick={() => setMode('signup')}
                className={`relative z-10 w-1/2 h-10 rounded-3xl font-medium ${mode === 'signup' ? '' : 'text-gray-600'}`}
              >
                Sign Up
              </button>

              <button
                onClick={() => setMode('signin')}
                className={`relative z-10 w-1/2 h-10 rounded-3xl font-medium ${mode === 'signin' ? '' : 'text-gray-600'}`}
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Conditional forms */}
          {mode === 'signup' ? (
            <form className="flex flex-col gap-4" action="" onSubmit={(e)=>{e.preventDefault(); /* TODO: handle signup */}}>
              <div className="relative">
                <input placeholder=" " className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600" type="text" id="fullname" />
                <label htmlFor="fullname" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Full Name</label>
              </div>

              <div className="relative">
                <input placeholder=" " className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600" type="tel" id="phone" />
                <label htmlFor="phone" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Phone Number</label>
              </div>

              <div className="relative">
                <input placeholder=" " className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600" type="password" id="password" />
                <label htmlFor="password" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Password</label>
              </div>

              <div className="relative">
                <input placeholder=" " className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600" type="password" id="confirmPassword" />
                <label htmlFor="confirmPassword" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Confirm Password</label>
              </div>

              <div className="flex items-center gap-2">
                <input id="agree" type="checkbox" required className="w-4 h-4" />
                <label htmlFor="agree" className="text-sm text-gray-600">I agree to the <a href="#" className="text-sky-600 underline">Terms and Conditions</a></label>
              </div>

              <button className="bg-orange-500 text-white py-3 rounded-3xl mt-2 font-medium disabled:opacity-50" type="submit">Create Account</button>

              <h3 className="text-center text-sm text-gray-500 mt-2">Or Sign up With</h3>

              <button className="bg-sky-600 w-full h-12 cursor-pointer rounded-3xl flex items-center justify-center gap-2 mt-2">
                <img src={google} alt="google" className="w-5 h-5" />
                <span className="font-medium text-white">Sign Up with Google</span>
              </button>
            </form>
          ) : (
            <form className="flex flex-col gap-4" action="" onSubmit={(e)=>{e.preventDefault(); /* TODO: handle signin */}}>
              <div className="relative">
                <input placeholder=" " className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600" type="tel" id="signinPhone" />
                <label htmlFor="signinPhone" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Phone Number</label>
              </div>

              <div className="relative">
                <input placeholder=" " className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600" type="password" id="signinPassword" />
                <label htmlFor="signinPassword" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Password</label>
              </div>

              <div className="flex justify-end">
                <a href="#" className="text-sm text-sky-600 underline">Forgot password?</a>
              </div>

              <button className="bg-orange-600 text-white py-3 rounded-3xl mt-2 font-medium" type="submit">Sign In</button>

              <h3 className="text-center text-sm text-gray-500 mt-2">Or Sign in With</h3>

              <button className="bg-sky-600 w-full h-12 cursor-pointer rounded-3xl flex items-center justify-center gap-2 mt-2">
                <img src={google} alt="google" className="w-5 h-5" />
                <span className="font-medium text-white">Sign In with Google</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
export default Login
