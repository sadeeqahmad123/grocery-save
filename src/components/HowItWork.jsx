import React, { useState } from "react";
import { Arrow, CreateLists, Step2, Step3, Step4 } from "./icons";
import CreateList from "./CreateList";
import AddItems from "./AddItems";
import TrackPrices from "./TrackPrices";
import SaveMoney from "./SaveMoney";

const HowItWork = () => {
  const [activeComponent, setActiveComponent] = useState("CreateList");

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
              <button
                onClick={() => setActiveComponent("CreateList")}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 hover:shadow-md`}
              >
                <div className="flex items-center">
                  <div
                    className="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-emerald-100 text-emerald-600
                "
                  >
                    <CreateLists />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-emerald-600">
                        Step 1
                      </span>
                      <Arrow />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Create Lists
                    </h3>
                  </div>
                </div>
              </button>
              <button
                onClick={() => setActiveComponent("AddItems")}
                className={`w-full text-left p-4 hover:shadow-md rounded-lg transition-all duration-300 
                 `}
              >
                <div className="flex items-center">
                  <div
                    className="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-gray-100 text-gray-500
                "
                  >
                    <Step2 />
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
              <button
                onClick={() => setActiveComponent("TrackPrices")}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 hover:shadow-md`}
              >
                <div className="flex items-center">
                  <div
                    className="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-gray-100 text-gray-500
                "
                  >
                    <Step3 />
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
              <button
                onClick={() => setActiveComponent("SaveMoney")}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 hover:shadow-md`}
              >
                <div className="flex items-center">
                  <div
                    className="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-gray-100 text-gray-500
                "
                  >
                    <Step4 />
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
            {activeComponent === "CreateList" && <CreateList />}
            {activeComponent === "AddItems" && <AddItems />}
            {activeComponent === "TrackPrices" && <TrackPrices />}
            {activeComponent === "SaveMoney" && <SaveMoney />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
