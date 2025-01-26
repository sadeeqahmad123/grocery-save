import React from "react";

const Footer = () => {
  return (
    <div className="bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start saving on groceries today
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Join thousands of smart shoppers who are already saving time and money
          with GrocerySave. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
            Sign Up Now - It's Free
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
