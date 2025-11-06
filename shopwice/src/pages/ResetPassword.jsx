import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import arrow from '../assets/arrow-left.svg'

function ResetPassword() {
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function passwordStrength(pw) {
    if (!pw) return 0
    let score = 0
    if (pw.length >= 8) score += 1
    if (/[A-Z]/.test(pw)) score += 1
    if (/[0-9]/.test(pw)) score += 1
    if (/[^A-Za-z0-9]/.test(pw)) score += 1
    return score // 0-4
  }

  function validatePassword(pw) {
    if (!pw || pw.length < 8) return 'Password must be at least 8 characters.'
    return ''
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    const pwErr = validatePassword(password)
    if (pwErr) { setError(pwErr); return }
    if (password !== confirmPassword) { setError('Passwords do not match.'); return }

    // Example: if you use JWT auth, include the JWT stored in localStorage when calling your API.
    const jwt = localStorage.getItem('jwt')

    setLoading(true)
    try {
      // Replace the simulated request below with a real API call.
      // Example real call:
      // await fetch('/api/auth/reset-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${jwt}` },
      //   body: JSON.stringify({ password: password })
      // })

      // Simulate network/API latency
      await new Promise(r => setTimeout(r, 900))

      // On success show notification + redirect to login
      setSuccess(true)
      setTimeout(() => {
        setLoading(false)
        // Optional: clear jwt if you want user to reauthenticate
        // localStorage.removeItem('jwt')
        navigate('/login')
      }, 900)
    } catch (err) {
      setLoading(false)
      setError('Failed to update password. Please try again.')
    }
  }

  if (success) {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden p-8 text-center">
          <svg className="mx-auto mb-4 w-16 h-16 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 className="text-2xl font-semibold mb-2">Password updated</h2>
          <p className="text-sm text-gray-600 mb-6">Your password was successfully changed. Redirecting to sign in…</p>
          <div className="flex gap-2">
            <Link to="/login" className="flex-1 py-2 rounded-2xl border text-center">Back to login</Link>
            <button onClick={() => { setSuccess(false); setPassword(''); setConfirmPassword('') }} className="flex-1 bg-sky-600 text-white rounded-2xl py-2">Reset again</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="mb-4 flex items-center">
            <Link to="/login" className="rounded hover:bg-black/10 p-1" aria-label="Back to login">
              <img src={arrow} alt="back" className="w-6 h-6" />
            </Link>
          </div>

          <div className="mb-4 text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Set a new password</h1>
            <p className="text-sm text-gray-600">Create a strong new password for your account.</p>
          </div>

          {error && (
            <div className="mb-4 text-sm text-red-600">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input
                id="newPassword"
                  type={showPassword ? 'text' : 'password'}
                placeholder=" "
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600"
              />
              <label htmlFor="newPassword" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">New password</label>
            </div>

              {/* Strength meter */}
              <div className="mt-1">
                <div className="h-2 w-full bg-gray-200 rounded overflow-hidden">
                  <div style={{ width: `${(passwordStrength(password) / 4) * 100}%` }} className={`h-2 ${passwordStrength(password) >= 3 ? 'bg-green-500' : passwordStrength(password) === 2 ? 'bg-yellow-400' : 'bg-red-400'}`} />
                </div>
                <div className="text-xs text-gray-500 mt-1">Strength: {['Empty','Weak','Fair','Good','Strong'][passwordStrength(password)]}</div>
              </div>

            <div className="relative">
              <input
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder=" "
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600"
              />
              <label htmlFor="confirmPassword" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Confirm password</label>
            </div>

            <div className="flex items-center gap-2">
              <input id="showPw" type="checkbox" checked={showPassword} onChange={() => setShowPassword(v => !v)} className="w-4 h-4" />
              <label htmlFor="showPw" className="text-sm text-gray-600">Show passwords</label>
            </div>

            <button type="submit" disabled={loading} className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-3xl mt-2 font-medium w-full disabled:opacity-60">
              {loading ? 'Saving...' : 'Save new password'}
            </button>

            <div className="text-center text-sm text-gray-500 mt-2">
              Remembered your password? <Link to="/login" className="text-sky-600 underline">Sign in</Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default ResetPassword
