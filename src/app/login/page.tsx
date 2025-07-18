"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const SignIn = () => {
  const router = useRouter();
  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-300/50 via-gray-100/40 to-white/50 backdrop-blur-sm'>
      <div className="container px-4">
        <div className='absolute top-6 left-6'>
          <button 
            onClick={() => router.back()} 
            className='flex items-center text-gray-600 hover:text-black transition-colors'
          >
            <IoIosArrowBack className='text-2xl' />
            <span className='ml-1 text-base'>Back</span>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className='w-full max-w-md bg-white/90 p-6 rounded-2xl shadow-lg border border-gray-200 backdrop-blur-md'>
            <h1 className='text-3xl font-semibold text-gray-800 text-center mb-4'>Sign In</h1>

            <form className='flex flex-col gap-4'>
              <div className='flex flex-col'>
                <label className='text-sm text-gray-700 mb-1'>Username *</label>
                <input 
                  type="text" 
                  placeholder='Enter your username'
                  className='h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white'
                />
              </div>

              <div className='flex flex-col'>
                <label className='text-sm text-gray-700 mb-1'>Password *</label>
                <input 
                  type="password" 
                  placeholder='Enter your password'
                  className='h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white'
                />
              </div>

              <button 
                type='submit' 
                className='h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md'
              >
                Sign In
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default React.memo(SignIn);
