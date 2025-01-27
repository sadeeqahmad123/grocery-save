import React from "react";
import { AutoCatogerize, SmartLists, VoiceInput } from "./icons";

const AddItems = () => {
  return (
    <div class="bg-white rounded-2xl shadow-lg px-8 py-12 border">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Add Items</h3>
      <p class="text-gray-600 mb-8">
        Quickly add items with our smart autocomplete feature
      </p>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-gray-50 p-4 rounded-lg text-center hover:bg-emerald-50 transition-colors duration-300">
          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
            <SmartLists/>
          </div>
          <p class="text-sm font-medium text-gray-700">Smart search</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg text-center hover:bg-emerald-50 transition-colors duration-300">
          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
            <AutoCatogerize/>
          </div>
          <p class="text-sm font-medium text-gray-700">Auto-categorize</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg text-center hover:bg-emerald-50 transition-colors duration-300">
          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
            <VoiceInput/>
          </div>
          <p class="text-sm font-medium text-gray-700">Voice input</p>
        </div>
      </div>
      <div class="mt-8 flex justify-between items-center">
        <button class="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100">
          Previous Step
        </button>
        <button class="px-4 py-2 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default AddItems;
