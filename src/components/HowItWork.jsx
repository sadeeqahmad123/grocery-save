import React from "react";
import { Arrow, CreateLists, OrganizeStore, SetReminders, ShareWithFamily, Step2, Step3, Step4 } from "./icons";

const HowItWork = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How GrocerySave Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started in minutes and save hours every week
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="space-y-4">
              <button className="w-full text-left p-4 rounded-lg transition-all duration-300 bg-white shadow-lg border-l-4 border-emerald-500">
                <div className="flex items-center">
                  <div
                    className="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-emerald-100 text-emerald-600
                "
                  >
                    <CreateLists/> 
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-emerald-600">
                        Step 1
                      </span>
                    <Arrow/>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Create Lists
                    </h3>
                  </div>
                </div>
              </button>
              <button className="w-full text-left p-4 rounded-lg transition-all duration-300 bg-white/50 hover:bg-white hover:shadow-md">
                <div className="flex items-center">
                  <div
                    className="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-gray-100 text-gray-500
                "
                  >
                    <Step2/>
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500">
                        Step 2
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Add Items
                    </h3>
                  </div>
                </div>
              </button>
              <button className="w-full text-left p-4 rounded-lg transition-all duration-300 bg-white/50 hover:bg-white hover:shadow-md">
                <div className="flex items-center">
                  <div
                    className="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-gray-100 text-gray-500
                "
                  >
                    <Step3/>
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500">
                        Step 3
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Track Prices
                    </h3>
                  </div>
                </div>
              </button>
              <button className="w-full text-left p-4 rounded-lg transition-all duration-300 bg-white/50 hover:bg-white hover:shadow-md">
                <div className="flex items-center">
                  <div
                    className="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-gray-100 text-gray-500
                "
                  >
                    <Step4/>
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500">
                        Step 4
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Save Money
                    </h3>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg px-8 py-12 border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Create Lists
              </h3>
              <p className="text-gray-600 mb-8">
                Create custom shopping lists for different stores or occasions
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-emerald-50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <OrganizeStore/>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    Organize by store
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-emerald-50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <ShareWithFamily/>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    Share with family
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-emerald-50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <SetReminders/>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    Set reminders
                  </p>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <button
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 cursor-not-allowed"
                  disabled=""
                >
                  Previous Step
                </button>
                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700">
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
