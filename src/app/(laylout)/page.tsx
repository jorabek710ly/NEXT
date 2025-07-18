// app/page.tsx (yoki app/home/page.tsx)

import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Home Page"
}

const Home = () => {
  return (
    <section className='section_home'>
      <div className="container">
        <h1 className='text-2xl font-bold'>Welcome to the Home Page!</h1>
        <p className='mt-2 text-gray-600'>This is a simple home page.</p>
      </div>
    </section>
  )
}

export default Home
