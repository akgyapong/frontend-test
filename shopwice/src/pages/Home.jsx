import React from 'react'
import background from '../assets/background.jpg'

function Home() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden="true"
      />

      {/* Foreground content */}
      <main className="relative z-10 flex items-center justify-center flex-col text-white p-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
        <h1 className="text-4xl font-bold">Welcome to Shopwice</h1>
        <p className="mt-2 text-lg">Discover products, offers and more.</p>
      </main>
    </div>
  )
}

export default Home