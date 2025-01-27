import React from 'react'
import { MobileReady, PriceHitory, SmartLists } from './icons'

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Everything you need to shop smarter
      </h2>
      <p className="text-xl text-gray-600">
        Simple yet powerful features to make grocery shopping a breeze
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-md border ">
        <div className="w-12 h-12 bg-emerald-100 rounded-md flex items-center justify-center mb-4">
        <SmartLists/>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Smart Lists
        </h3>
        <p className="text-gray-600">
          Create and manage multiple shopping lists with smart
          categorization and priority settings.
        </p>
      </div>
      <div className="bg-white p-6 rounded-md border">
        <div className="w-12 h-12 bg-emerald-100 rounded-md flex items-center justify-center mb-4">
            <PriceHitory/>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Price History
        </h3>
        <p className="text-gray-600">
          Track price changes over time and get notified when your
          favorite items go on sale.
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl border rounded-md">
        <div className="w-12 h-12 bg-emerald-100 rounded-md flex items-center justify-center mb-4">
            <MobileReady/>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Mobile Ready
        </h3>
        <p className="text-gray-600">
          Access your lists anywhere with our mobile-friendly design and
          offline support.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Features