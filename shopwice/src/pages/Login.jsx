// React hook for local component state
import { useState } from 'react'

// Small asset imports used by the UI (icons and background)
import arrow from '../assets/arrow-left.svg'
import google from '../assets/Google Icon.svg'


function Login() {
  // Local state: controls whether the card shows signup or signin form
  const [mode, setMode] = useState('signup') // 'signup' | 'signin'

  // Render the login page
  return (
    // Root: centers the card horizontally and vertically
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 p-6">
      {/* Card wrapper: responsive max width and rounded corners */}
      <div className="w-full max-w-md sm:max-w-md md:max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">

        {/* Single-column centered card (clean right-side only). Padding adjusted responsively */}
        <div className="flex flex-col justify-center items-center">

          {/* Form area */}
          <div className="w-full">
            {/* Inner white card containing toggle and forms; responsive padding */}
            <div className="bg-white p-8 sm:p-6 rounded-xl shadow-lg">

              {/* Back arrow (top-left) - small UX affordance */}
              <div className="mb-4 flex items-center">
                <a href="#" className="rounded hover:bg-black/10" aria-label="Back">
                  <img src={arrow} alt="arrow left" className="w-6 h-6"/>
                </a>
              </div>

              {/* Page heading (optional on md, hidden on small screens since image panel is shown) */}
              <div className="mb-4">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1">Welcome to Shopwice</h1>
                <h3 className="text-sm md:text-base text-gray-600 font-light">Get a great shopping experience with Shopwice</h3>
              </div>

              {/* Toggle control: animated pill indicates active tab */}
              <div className="relative bg-gray-100 rounded-3xl p-1 mb-6">
                <div className="relative flex">
                  {/* Animated pill: moves left/right based on `mode` */}
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 bg-white rounded-3xl h-10 w-1/2 transition-all duration-300 ease-in-out ${mode === 'signup' ? 'left-1' : 'left-1/2'}`}
                    aria-hidden
                  />

                  {/* Sign Up button */}
                  <button
                    onClick={() => setMode('signup')}
                    className={`relative z-10 w-1/2 h-10 rounded-3xl font-medium ${mode === 'signup' ? '' : 'text-gray-600'}`}
                  >
                    Sign Up
                  </button>

                  {/* Sign In button */}
                  <button
                    onClick={() => setMode('signin')}
                    className={`relative z-10 w-1/2 h-10 rounded-3xl font-medium ${mode === 'signin' ? '' : 'text-gray-600'}`}
                  >
                    Sign In
                  </button>
                </div>
              </div>

              {/* Conditional rendering of forms depending on `mode` */}
              {mode === 'signup' ? (
                // SIGNUP FORM
                <form className="flex flex-col gap-4" action="" onSubmit={(e)=>{e.preventDefault(); /* TODO: handle signup */}}>
                  {/* Full name input with floating label using peer */}
                  <div className="relative">
                    <input placeholder=" " className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600" type="text" id="fullname" />
                    <label htmlFor="fullname" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Full Name</label>
                  </div>

                  {/* Phone input */}
                  <div className="relative">
                    <input placeholder=" " className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600" type="tel" id="phone" />
                    <label htmlFor="phone" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Phone Number</label>
                  </div>

                  {/* Password input */}
                  <div className="relative">
                    <input placeholder=" " className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600" type="password" id="password" />
                    <label htmlFor="password" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Password</label>
                  </div>

                  {/* Terms checkbox */}
                  <div className="flex items-center gap-2">
                    <input id="agree" type="checkbox" required className="w-4 h-4" />
                    <label htmlFor="agree" className="text-sm text-gray-600">I agree to the <a href="#" className="text-sky-600 underline">Terms and Conditions</a></label>
                  </div>

                  {/* Create account button */}
                  <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-3xl mt-2 font-medium disabled:opacity-50 w-full" type="submit">Create Account</button>

                  {/* Social sign-up options header */}
                  <h3 className="text-center text-sm text-gray-500 mt-2">Or Sign up With</h3>

                  {/* Google social button */}
                  <button className="bg-sky-600 w-full h-12 cursor-pointer rounded-3xl flex items-center justify-center gap-2 mt-2 hover:brightness-90">
                    <img src={google} alt="google" className="w-5 h-5" />
                    <span className="font-medium text-white">Sign Up with Google</span>
                  </button>

                  {/* Facebook social button */}
                  <button className="w-full h-12 cursor-pointer rounded-3xl flex items-center justify-center gap-2 mt-2 hover:brightness-90" style={{backgroundColor: '#1877F2'}}>
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.07h3.128V8.412c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.466.099 2.797.143v3.245l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.636h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
                    </svg>
                    <span className="font-medium text-white">Sign Up with Facebook</span>
                  </button>
                </form>
              ) : (
                // SIGNIN FORM
                <form className="flex flex-col gap-4" action="" onSubmit={(e)=>{e.preventDefault(); /* TODO: handle signin */}}>
                  {/* Phone input */}
                  <div className="relative">
                    <input placeholder=" " className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600" type="tel" id="signinPhone" />
                    <label htmlFor="signinPhone" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Phone Number</label>
                  </div>

                  {/* Password input */}
                  <div className="relative">
                    <input placeholder=" " className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600" type="password" id="signinPassword" />
                    <label htmlFor="signinPassword" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Password</label>
                  </div>

                  {/* Forgot password link */}
                  <div className="flex justify-end">
                    <a href="#" className="text-sm text-sky-600 underline">Forgot password?</a>
                  </div>

                  {/* Sign in button */}
                  <button className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-3xl mt-2 font-medium w-full" type="submit">Sign In</button>

                  {/* Social sign-in header */}
                  <h3 className="text-center text-sm text-gray-500 mt-2">Or Sign in With</h3>

                  {/* Google sign-in */}
                  <button className="bg-sky-600 w-full h-12 cursor-pointer rounded-3xl flex items-center justify-center gap-2 mt-2 hover:brightness-90">
                    <img src={google} alt="google" className="w-5 h-5" />
                    <span className="font-medium text-white">Sign In with Google</span>
                  </button>

                  {/* Facebook sign-in */}
                  <button className="w-full h-12 cursor-pointer rounded-3xl flex items-center justify-center gap-2 mt-2 hover:brightness-90" style={{backgroundColor: '#1877F2'}}>
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.07h3.128V8.412c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.466.099 2.797.143v3.245l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.636h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
                    </svg>
                    <span className="font-medium text-white">Sign In with Facebook</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

// Default export for the page component
export default Login
