import React from 'react'
import { Secure, Stars, Users } from './icons'

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">
        Smart Grocery Shopping,{" "}
        <span className="text-emerald-600">Made Simple</span>
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Organize your grocery lists, track prices, and save money with our
        intelligent shopping assistant. Join over 50,000 smart shoppers
        saving time and money every day.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-md shadow-sm hover:bg-emerald-700 transition-colors">
          Get Started Free
        </button>
        <button className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-md shadow-sm hover:bg-gray-50 transition-colors">
          Watch Demo
        </button>
      </div>
      <div className="mt-8 flex justify-center space-x-8">
        <div className="flex items-center">
          <Stars/>
          <span className="ml-2 text-gray-600">4.9/5 rating</span>
        </div>
        <div className="flex items-center">
        <Users/>
          <span className="ml-2 text-gray-600">50K+ users</span>
        </div>
        <div className="flex items-center">
        <Secure/>
          <span className="ml-2 text-gray-600">Secure &amp; Private</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero