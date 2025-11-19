import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import arrow from '../assets/arrow-left.svg'

export default function ResetInstructions() {
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

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

    setLoading(true)
    try {
      // simulate API call; replace with real call that sends JWT from localStorage if required
      await new Promise(r => setTimeout(r, 800))
      setSuccess(true)
      setLoading(false)
      setTimeout(() => navigate('/login'), 1000)
    } catch (err) {
      setLoading(false)
      setError('Failed to reset password. Try again.')
    }
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden p-8">
        <div className="mb-4 flex items-center">
          <Link to="/login" className="rounded hover:bg-black/10 p-1" aria-label="Back to login">
            <img src={arrow} alt="back" className="w-6 h-6" />
          </Link>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Reset your password</h1>
          <p className="text-sm text-gray-600">Follow these quick steps to set a new password for your account.</p>
        </div>

        {!showForm && !success && (
          <>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                Click "Set new password" below. This will reveal the form to enter your new password.
              </li>
              <li>
                Enter a new strong password (at least 8 characters). Avoid reusing old passwords.
              </li>
              <li>
                Confirm the new password by entering it again, then submit to save.
              </li>
            </ol>

            <div className="mt-6 flex gap-3">
              <button onClick={() => setShowForm(true)} className="flex-1 bg-orange-600 text-white py-2 rounded-2xl">Set new password</button>
              <Link to="/login" className="flex-1 py-2 border rounded-2xl text-center">Cancel</Link>
            </div>

            <p className="mt-4 text-xs text-gray-400">If the link expired, request a new reset from the "Forgot password" page.</p>
          </>
        )}

        {showForm && !success && (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-sm text-red-600">{error}</div>}
            <div className="relative">
              <input id="newpw" type={showPassword ? 'text' : 'password'} placeholder=" " value={password} onChange={e => setPassword(e.target.value)} className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600" />
              <label htmlFor="newpw" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">New password</label>
            </div>

            <div className="relative">
              <input id="confpw" type={showPassword ? 'text' : 'password'} placeholder=" " value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="peer block w-full border border-gray-300 rounded-2xl h-12 px-4 pt-4 placeholder-transparent focus:outline-none focus:border-sky-600" />
              <label htmlFor="confpw" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm bg-white px-1">Confirm password</label>
            </div>

            <div className="flex items-center gap-2">
              <input id="showPw" type="checkbox" checked={showPassword} onChange={() => setShowPassword(v => !v)} className="w-4 h-4" />
              <label htmlFor="showPw" className="text-sm text-gray-600">Show passwords</label>
            </div>

            <div className="flex gap-3">
              <button type="submit" disabled={loading} className="flex-1 bg-orange-600 text-white py-2 rounded-2xl">{loading ? 'Saving...' : 'Save new password'}</button>
              <button type="button" onClick={() => { setShowForm(false); setPassword(''); setConfirmPassword(''); setError('') }} className="flex-1 py-2 border rounded-2xl">Cancel</button>
            </div>
          </form>
        )}

        {success && (
          <div className="mt-4 text-center">
            <div className="text-green-600 font-medium">Password updated successfully — redirecting to login...</div>
          </div>
        )}
      </div>
    </div>
  )
}
