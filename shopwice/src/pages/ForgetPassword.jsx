import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/arrow-left.svg'

function ForgetPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please enter your email address.')
      return
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    // Simulate async send
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 900)
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full">
            <div className="bg-white p-8 sm:p-6 rounded-xl shadow-lg">

              <div className="mb-4 flex items-center">
                <Link to="/login" className="rounded hover:bg-black/10 p-1" aria-label="Back to login">
                  <img src={arrow} alt="back" className="w-6 h-6" />
                </Link>
              </div>

              <div className="mb-4 text-center">
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">Forgot Password</h1>
                <p className="text-sm text-gray-600">Enter the email associated with your account and we'll send a reset link.</p>
              </div>

              {!sent ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="relative">
                    <input
                      id="fpEmail"
                      name="email"
                      placeholder=" "
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600"
                      aria-describedby="emailHelp"
                      aria-invalid={!!error}
                    />
                    <label htmlFor="fpEmail" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Email address</label>
                  </div>

                  {error && <div className="text-sm text-red-600">{error}</div>}

                  <button type="submit" disabled={loading} className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-3xl mt-2 font-medium w-full disabled:opacity-60">
                    {loading ? 'Sending...' : 'Send reset link'}
                  </button>

                  <div className="text-center text-sm text-gray-500 mt-2">
                    Remembered your password? <Link to="/login" className="text-sky-600 underline">Sign in</Link>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center gap-4 py-6">
                  <svg className="w-16 h-16 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Check your inbox</h3>
                    <p className="text-sm text-gray-600">If an account with <span className="font-medium">{email}</span> exists, we've sent a password reset link.</p>
                  </div>

                  <div className="flex gap-2 w-full">
                    <Link to="/login" className="flex-1 text-center py-2 border rounded-2xl">Back to login</Link>
                    <button onClick={() => { setSent(false); setEmail('') }} className="flex-1 bg-sky-600 text-white py-2 rounded-2xl">Send again</button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
