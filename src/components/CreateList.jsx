import React from 'react'
import {  OrganizeStore, SetReminders, ShareWithFamily} from "./icons";
const CreateList = () => {
  return (
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
  )
}

export default CreateList