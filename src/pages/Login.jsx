import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/arrow-left.svg'
import google from '../assets/Google Icon.svg'
import { authService } from '../services/authService.js'
import { API_CONFIG } from '../config/api.js';


function Login() {
  // Local state: controls whether the card shows signup or signin form
  const [mode, setMode] = useState('signup') // 'signup' | 'signin'
  // Signup controlled fields and errors
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [signupError, setSignupError] = useState('')
  // show/hide password toggles
  const [showSignupPasswords, setShowSignupPasswords] = useState(false)
  // Signin controlled fields and errors (single identifier field: email or phone)
  const [signinIdentifier, setSigninIdentifier] = useState('')
  const [signinPassword, setSigninPassword] = useState('')
  const [signinError, setSigninError] = useState('')
  const [showSigninPassword, setShowSigninPassword] = useState(false)

  // Render the login page
  return (
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
                <Link to="/" className="rounded hover:bg-black/10" aria-label="Back">
                  <img src={arrow} alt="arrow left" className="w-6 h-6"/>
                </Link>
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
                <form className="flex flex-col gap-4" action="" onSubmit={async (e)=>{
                  e.preventDefault()
                  // basic validation
                  setSignupError('')
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                  if (!fullName.trim()) { setSignupError('Please enter your full name.'); return }
                  if (!email.trim()) { setSignupError('Please enter your email address.'); return }
                  if (!emailRegex.test(email.trim())) { setSignupError('Please enter a valid email address.'); return }
                  if (!phone.trim()) { setSignupError('Please enter your phone number.'); return }
                  if (!signupPassword) { setSignupError('Please enter a password.'); return }
                  if (signupPassword !== confirmPassword) { setSignupError('Passwords do not match.'); return }
                  // Submit signup payload to API
                  setSignupError('')
                  
                  console.log('Signup payload:', {
                    full_name: fullName.trim(),
                    email: email.trim(),
                    phone_number: phone.trim(),
                    password: signupPassword,
                    confirm_password: confirmPassword,
                  });
                  
                  try {
                    const response = await fetch(API_CONFIG.getFullURL(API_CONFIG.endpoints.auth.register), {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        full_name: fullName.trim(),
                        email: email.trim(),
                        phone_number: phone.trim(),
                        password: signupPassword,
                        confirm_password: confirmPassword,
                      }),
                    })
                    
                    console.log('Response status:', response.status);
                    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
                    
                    const data = await response.json()
                    console.log('Response data:', data);
                    
                    if (data.success) {
                      // Store tokens
                      localStorage.setItem('access_token', data.tokens.access)
                      localStorage.setItem('refresh_token', data.tokens.refresh)
                      localStorage.setItem('user', JSON.stringify(data.data))
                      // Handle success
                      alert('Signup successful! Welcome to Shopwice.')
                      window.location.href = '/'
                    } else {
                      // Handle errors with detailed logging
                      console.error('Signup failed:', data);
                      const errors = data.errors || {}
                      const errorMessages = []
                      
                      // Check for specific field errors
                      if (errors.phone_number) errorMessages.push(`Phone: ${errors.phone_number.join(', ')}`)
                      if (errors.password) errorMessages.push(`Password: ${errors.password.join(', ')}`)
                      if (errors.confirm_password) errorMessages.push(`Confirm Password: ${errors.confirm_password.join(', ')}`)
                      if (errors.full_name) errorMessages.push(`Full Name: ${errors.full_name.join(', ')}`)
                      if (errors.email) errorMessages.push(`Email: ${errors.email.join(', ')}`)
                      if (errors.non_field_errors) errorMessages.push(`${errors.non_field_errors.join(', ')}`)
                      
                      // Show general error if no specific errors found
                      if (errorMessages.length === 0) {
                        errorMessages.push(data.message || 'Signup failed. Please try again.')
                      }
                      
                      setSignupError(errorMessages.join(' | '))
                    }
                  } catch (error) {
                    console.error('Network error:', error);
                    setSignupError(`Network error: ${error.message}. Please check your connection and try again.`)
                  }
                }}>
                  {/* Full name input with floating label using peer */}
                  <div className="relative">
                    <label htmlFor="fullname" className="sr-only">Full Name</label>
                    <input placeholder="Full Name" className="block w-full border border-gray-300 rounded-2xl h-12 px-4 py-3 focus:outline-none focus:border-sky-600" type="text" id="fullname" value={fullName} onChange={e => setFullName(e.target.value)} />
                  </div>

                  {/* Email input */}
                  <div className="relative">
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input placeholder="Email Address" className="block w-full border border-gray-300 rounded-2xl h-12 px-4 py-3 focus:outline-none focus:border-sky-600" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>

                  {/* Phone input */}
                  <div className="relative">
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <input placeholder="Phone Number" className="block w-full border border-gray-300 rounded-2xl h-12 px-4 py-3 focus:outline-none focus:border-sky-600" type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} />
                  </div>



                  {/* Password input */}
                  <div className="relative">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input placeholder="Password" className="block w-full border border-gray-300 rounded-2xl h-12 px-4 py-3 focus:outline-none focus:border-sky-600" type={showSignupPasswords ? 'text' : 'password'} id="password" value={signupPassword} onChange={e => setSignupPassword(e.target.value)} />
                  </div>

                  {/* Confirm password input */}
                  <div className="relative">
                    <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                    <input placeholder="Confirm Password" className="block w-full border border-gray-300 rounded-2xl h-12 px-4 py-3 focus:outline-none focus:border-sky-600" type={showSignupPasswords ? 'text' : 'password'} id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                  </div>

                  {/* Show password checkbox (signup) */}
                  <div className="flex items-center gap-2">
                    <input id="showSignupPassword" type="checkbox" className="w-4 h-4" checked={showSignupPasswords} onChange={e => setShowSignupPasswords(e.target.checked)} />
                    <label htmlFor="showSignupPassword" className="text-sm text-gray-600">Show password</label>
                  </div>

                  {signupError && <div className="text-sm text-red-600">{signupError}</div>}

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
                // SIGNIN FORM (phone number only)
                <form className="flex flex-col gap-4" action="" onSubmit={async (e)=>{
                  e.preventDefault()
                  setSigninError('')
                  const phone = signinIdentifier.trim()
                  const pw = signinPassword
                  if (!phone) { setSigninError('Please enter your phone number.'); return }
                  if (!pw) { setSigninError('Please enter your password.'); return }
                  // Basic phone validation
                  const digits = phone.replace(/\D/g, '')
                  if (digits.length < 6) { setSigninError('Please enter a valid phone number.'); return }
                  // Call signin API
                  try {
                    const response = await fetch(API_CONFIG.getFullURL(API_CONFIG.endpoints.auth.login), {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        phone_number: phone,
                        password: pw,
                      }),
                    })
                    const data = await response.json()
                    if (data.success) {
                      // Store tokens
                      localStorage.setItem('access_token', data.tokens.access)
                      localStorage.setItem('refresh_token', data.tokens.refresh)
                      localStorage.setItem('user', JSON.stringify(data.data))
                      // Handle success
                      alert('Sign in successful!')
                      window.location.href = '/'
                    } else {
                      setSigninError(data.error || 'Sign in failed. Please try again.')
                    }
                  } catch (error) {
                    setSigninError('Network error. Please check your connection and try again.')
                  }
                }}>
                  {/* Phone input */}
                  <div className="relative">
                    <label htmlFor="signinIdentifier" className="sr-only">Phone Number</label>
                    <input placeholder="Phone Number" className="block w-full border border-gray-300 rounded-2xl h-12 px-4 py-3 focus:outline-none focus:border-sky-600" type="tel" id="signinIdentifier" value={signinIdentifier} onChange={e => setSigninIdentifier(e.target.value)} />
                  </div>

                  {/* Password input */}
                  <div className="relative">
                    <label htmlFor="signinPassword" className="sr-only">Password</label>
                    <input placeholder="Password" className="block w-full border border-gray-300 rounded-2xl h-12 px-4 py-3 focus:outline-none focus:border-sky-600" type={showSigninPassword ? 'text' : 'password'} id="signinPassword" value={signinPassword} onChange={e => setSigninPassword(e.target.value)} />
                  </div>

                  {/* Show password checkbox (signin) */}
                  <div className="flex items-center gap-2">
                    <input id="showSigninPassword" type="checkbox" className="w-4 h-4" checked={showSigninPassword} onChange={e => setShowSigninPassword(e.target.checked)} />
                    <label htmlFor="showSigninPassword" className="text-sm text-gray-600">Show password</label>
                  </div>

                  {signinError && <div className="text-sm text-red-600">{signinError}</div>}

                  {/* Forgot password link */}
                  <div className="flex justify-end">
                    <Link to="/forgot-password" className="text-sm text-sky-600 underline">Forgot password?</Link>
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
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden={true}>
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
