import React, { useState } from "react";
import Modal from "./Modal";
import { DeleteBtn } from "./icons";

const ItemManagement = ({ categories, setCategories }) => {
  const [selectedDay, setSelectedDay] = useState("");
  const [newItemName, setNewItemName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedDay("");
    setNewItemName("");
  };

  const addItemToDay = () => {
    if (!selectedDay) {
      alert("Please select a day.");
      return;
    }
    if (!newItemName.trim()) {
      alert("Please enter an item name.");
      return;
    }
    setCategories((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        items: category.items.map((dayItem) =>
          dayItem.day === selectedDay
            ? { ...dayItem, items: [...dayItem.items, newItemName] }
            : dayItem
        ),
      }))
    );

    setNewItemName("");
    handleClose();
  };

  const deleteCategory = (dayName) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        items: category.items.map((dayItem) =>
          dayItem.day === dayName ? { ...dayItem, items: [] } : dayItem
        ),
      }))
    );
  };

  return (
    <div className="w-full p-4">
      <div>
        <button
          onClick={handleOpen}
          className="text-white bg-emerald-600 px-4 py-2 rounded-lg mb-3"
        >
          + Add Item
        </button>
      </div>

      <div className="">
        {categories.map((category) => (
          <div key={category.name} className=" mx-auto w-full p-4">
            {category.items.map((dayItem) =>
              dayItem.items.length ? (
                <div
                  key={dayItem.day}
                  className="rounded-lg shadow my-4 bg-white p-4"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">{dayItem.day}</h4>
                    <button
                      onClick={() => deleteCategory(dayItem.day)}
                      className="p-3 bg-red-100 rounded-lg cursor-pointer"
                    >
                      <DeleteBtn />
                    </button>
                  </div>
                  <ul className="mt-2 space-y-2">
                    {dayItem.items.map((item, index) => (
                      <li key={index} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <div className="flex flex-col space-y-4">
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="border border-gray-300 rounded-lg px-2 py-1 w-full"
          >
            <option value="">Select Day</option>
            {categories[0].items.map((dayItem) => (
              <option key={dayItem.day} value={dayItem.day}>
                {dayItem.day}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Add Item"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="border border-gray-300 rounded-lg px-2 py-1 w-full"
          />

          <button
            onClick={addItemToDay}
            className="text-white bg-emerald-600 px-4 py-2 rounded-lg w-full"
          >
            Add
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ItemManagement;
