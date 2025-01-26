import React from 'react'

const LovedShoppers = () => {
  return (
    <div className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Loved by Shoppers
        </h2>
        <p className="text-xl text-gray-600">
          See what our users have to say about GrocerySave
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">S</span>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Sarah Johnson</h4>
              <p className="text-gray-600">Busy Mom</p>
            </div>
          </div>
          <p className="text-gray-600 italic">
            "GrocerySave has completely transformed how I shop for my
            family. I save both time and money every week!"
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">M</span>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Mike Chen</h4>
              <p className="text-gray-600">Budget Conscious</p>
            </div>
          </div>
          <p className="text-gray-600 italic">
            "The price tracking feature is amazing. I've saved over $200
            in the past month alone."
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">E</span>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Emily Davis</h4>
              <p className="text-gray-600">Health Enthusiast</p>
            </div>
          </div>
          <p className="text-gray-600 italic">
            "I love how I can organize my shopping lists by category.
            Makes healthy shopping so much easier!"
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LovedShoppers