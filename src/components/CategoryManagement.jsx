import React, { useState } from "react";
import { Cross } from "./icons";
import Modal from "./Modal";

const CategoryManagement = ({ categories, setCategories,isOpen,handleClose }) => {
  const [newCategory, setNewCategory] = useState("");

  const addCategory = () => {
    if (newCategory.trim()) {
      setCategories([
        ...categories,
        {
          id: Date.now(), 
          name: newCategory,
          items: [
            { day: "Monday", items: [] },
            { day: "Tuesday", items: [] },
            { day: "Wednesday", items: [] },
            { day: "Thursday", items: [] },
            { day: "Friday", items: [] },
            { day: "Saturday", items: [] },
            { day: "Sunday", items: [] },
          ],
        },
      ]);
      setNewCategory("");
    }
  };
  

  const removeCategory = (id) => {
    const updatedCategories = categories.filter((category) => category.id !== id);
    setCategories([...updatedCategories]);
  };
  
  return (
    <div className="bg-white">
     <Modal isOpen={isOpen} onClose={handleClose}>
     <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Add a category"
          className="border rounded-lg p-2 w-full focus:outline-none"
        />
        <button
          onClick={addCategory}
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>
     </Modal>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="flex my-3 justify-between items-center mb-2">
            <span>{category.name}</span>
            <button
              onClick={() => removeCategory(category.id)}
              className="bg-red-500 text-black py-1 rounded-lg"
            >
             <Cross/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManagement;
