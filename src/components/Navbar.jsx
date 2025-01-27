import React from "react";
import { Logo } from "./icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky w-full top-0 z-20 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
            <Logo/>
              <span className="ml-2 md:text-xl text-base font-bold text-gray-900">
                GrocerySave
              </span>
            </div>
          </div>
          <div className="ml-6 flex items-center">
            <Link
              className="bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
             to="/categories"
              data-discover="true"
            >
              Caterories
            </Link>
            <Link
              className="bg-white md:px-4 px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
             to="/login"
              data-discover="true"
            >
              Sign in
            </Link>
            <Link
              className="ml-3 inline-flex items-center md:px-4 px-2 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              to="/signup"
              data-discover="true"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
