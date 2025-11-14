
import React, { useState } from 'react'

function ContactUs() {
  // Local form state (controlled form inputs)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  // Helper to update a specific field
  const update = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  // Demo submit handler: validate required fields, then simulate success
  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      // Simple client-side validation — swap for nicer inline errors if desired
      alert('Please fill name, email and message')
      return
    }
    // Simulate send and clear form
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">CONTACT US</h1>
          <p className="text-gray-600 max-w-xl">If you have any questions, please feel free to get in touch with us via phone, text, email, the form below, or on social media.</p>
        </div>

    {/* Top area: form (left) and info cards (right)
      - On small screens this stacks into a single column
      - On large screens we use a 2/1 layout (form wider than info column)
    */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 items-start">
          {/* Large form card */}
          {/* Form card (primary) */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-semibold text-lg mb-3">GET IN TOUCH</h2>
            <p className="text-sm text-gray-500 mb-4">Questions about products, orders or partnerships? Send us a message — we typically reply within 24 hours.</p>

            {/* Inner white panel to mimic the screenshot's card-within-card look */}
            <div className="bg-gray-50 border border-gray-100 rounded p-5">
              <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Row 1 (Name / Phone) */}
                <div className="flex flex-col">
                  <label className="text-xs text-gray-600 mb-1">Name</label>
                  <input required className="border border-gray-200 rounded p-3 bg-white" placeholder="Enter your name" value={form.name} onChange={update('name')} />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs text-gray-600 mb-1">Phone number</label>
                  <input className="border border-gray-200 rounded p-3 bg-white" placeholder="Enter your phone number" value={form.phone} onChange={update('phone')} />
                </div>

                {/* Row 2 (Email / Subject) */}
                <div className="flex flex-col">
                  <label className="text-xs text-gray-600 mb-1">Email</label>
                  <input required type="email" className="border border-gray-200 rounded p-3 bg-white" placeholder="Enter your email" value={form.email} onChange={update('email')} />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs text-gray-600 mb-1">Subject</label>
                  <input className="border border-gray-200 rounded p-3 bg-white" placeholder="Subject (optional)" value={form.subject} onChange={update('subject')} />
                </div>

                {/* Full width message */}
                <div className="md:col-span-2 flex flex-col">
                  <label className="text-xs text-gray-600 mb-1">Your message</label>
                  <textarea required className="border border-gray-200 rounded p-3 bg-white h-36 resize-none" placeholder="Write your message" value={form.message} onChange={update('message')} />
                </div>

                {/* Actions */}
                <div className="md:col-span-2 flex items-center gap-4">
                  <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow transition">SEND MESSAGE</button>
                  {sent && <span className="text-green-600 font-medium">Message sent (demo)</span>}
                </div>
              </form>
            </div>
          </div>

          {/* Right column: contact information and business hours boxes */}
          {/* Right column: contact information and business hours boxes */}
          <div className="space-y-4">
            {/* Contact information box */}
            <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-semibold mb-2">CONTACT INFORMATION</h3>
              <div className="text-sm text-gray-600 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded bg-red-50 text-red-600">📞</div>
                  <div>
                    <div className="text-xs text-gray-500">Phone</div>
                    <div className="text-sm text-gray-800"><a href="tel:+233555123456">+233 555 123 456</a></div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded bg-red-50 text-red-600">📍</div>
                  <div>
                    <div className="text-xs text-gray-500">Address</div>
                    <div className="text-sm text-gray-800">123 Market Street, Accra</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded bg-red-50 text-red-600">✉️</div>
                  <div>
                    <div className="text-xs text-gray-500">Email</div>
                    <div className="text-sm text-gray-800"><a href="mailto:support@shopwice.example">support@shopwice.example</a></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business hours box */}
            <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-semibold mb-3">BUSINESS HOURS</h3>
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <div className="font-medium">MON - FRI</div>
                  <div>9:00 am - 6:00 pm</div>
                </div>
                <div>
                  <div className="font-medium">SAT</div>
                  <div>9:00 am - 6:00 pm</div>
                </div>
                <div>
                  <div className="font-medium">SUN</div>
                  <div>9:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large full-width map below
            - The iframe has a fixed height for desktop but remains responsive horizontally.
            - If you prefer an aspect-ratio wrapper, replace the iframe with the `position:relative` wrapper used earlier.
        */}
        <div className="rounded-lg overflow-hidden border border-gray-200 mt-6">
          <iframe
            title="Shopwice location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0079543095844!2d-0.21262070000000094!3d5.565836800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf91a0cfc6eadd%3A0x56750a40cf2a2fb8!2sShopwice!5e0!3m2!1sen!2sgh!4v1762943632152!5m2!1sen!2sgh"
            className="w-full h-80 md:h-96"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs