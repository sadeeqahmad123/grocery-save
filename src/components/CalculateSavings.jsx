import React from 'react'

const CalculateSavings = () => {
  return (
    <div className="bg-emeral-50 py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Calculate Your Savings
        </h2>
        <p className="text-xl text-gray-600">
          See how much you could save with GrocerySave
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-2">Monthly Grocery Spend</h4>
            <p className="text-2xl font-bold text-emerald-600">$600</p>
            <p className="text-sm text-gray-600">Average household spend</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Potential Savings</h4>
            <p className="text-2xl font-bold text-emerald-600">$180</p>
            <p className="text-sm text-gray-600">30% average savings</p>
          </div>
        </div>
        <button className="w-full py-3 bg-emerald-600 text-white font-medium rounded-lg shadow-sm hover:bg-emerald-700 transition-colors">
          Start Saving Today
        </button>
      </div>
    </div>
  </div>
  )
}

export default CalculateSavings