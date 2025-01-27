import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render the modal if it is not open

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="bg-white p-6 mx-auto rounded-lg shadow-lg w-1/2"
        onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Modal Title</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div>{children}</div> {/* Render dynamic content passed as children */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
