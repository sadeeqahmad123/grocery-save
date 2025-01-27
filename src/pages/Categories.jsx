// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import CategoryManagement from "../components/CategoryManagement";
// import ShoppingListManagement from "../components/ShoppingList";

// const Categories = () => {
//     const [categories, setCategories] = useState([
//         {
//           name: "test",
//           items: [
//             { day: "Monday", items: ["Carrot", "Potato"] },
//             { day: "Tuesday", items: ["Eggs", "Milk"] },
//             { day: "Wednesday", items: [] },
//             { day: "Thursday", items: [] },
//             { day: "Friday", items: [] },
//             { day: "Saturday", items: [] },
//             { day: "Sunday", items: [] },
//           ],
//         },
//       ]);
// const [shoppingLists, setShoppingLists] = useState([]);

// const [isOpen, setIsOpen] = useState(false);
// const handleToggle = () => {
//   setIsOpen(true);
// };
// const handleClose = () => {
//   setIsOpen(false);
// };
//   return (
// <div className="flex w-full h-screen">
//   <div className="w-[20%] sticky top-0 border-r py-4 px-4 flex flex-col">
//     <div className="flex justify-between w-full mb-2">
//       <p>Category</p>{" "}
//       <p onClick={handleToggle} className="cursor-pointer px-2">
//         +
//       </p>
//     </div>
// <CategoryManagement
//   isOpen={isOpen}
//   handleClose={handleClose}
//   categories={categories}
//   setCategories={setCategories}
// />
//   </div>
//   <div className="flex flex-col w-full h-full overflow-y-auto">
//     <Navbar />
//     <div className=" bg-gradient-to-b from-emerald-50 to-white">
//       <ShoppingListManagement
//         shoppingLists={shoppingLists}
//         setShoppingLists={setShoppingLists}
//         categories={categories[0]}
//         setCategories={setCategories}
//       />
//     </div>
//   </div>
// </div>
//   );
// };

// export default Categories;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ItemManagement from "../components/ItemManagement";
import CategoryManagement from "../components/CategoryManagement";

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Shopping List",
      items: [
        { day: "Monday", items: ["Carrot", "Potato"] },
        { day: "Tuesday", items: ["Eggs", "Milk"] },
        { day: "Wednesday", items: [] },
        { day: "Thursday", items: [] },
        { day: "Friday", items: [] },
        { day: "Saturday", items: [] },
        { day: "Sunday", items: [] },
      ],
    },
  ]);
  
  const handleToggle = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex w-full h-screen">
      <div className="w-[20%] sticky top-0 border-r py-4 px-4 flex flex-col">
        <div className="flex justify-between w-full mb-2">
          <p>Category</p>{" "}
          <p onClick={handleToggle} className="cursor-pointer px-2">
            +
          </p>
        </div>
        <CategoryManagement
          isOpen={isOpen}
          handleClose={handleClose}
          categories={categories}
          setCategories={setCategories}
        />
      </div>
      <div className="flex flex-col w-full h-full overflow-y-auto">
        <Navbar />
        <div className=" bg-gradient-to-b from-emerald-50 to-white">
          <ItemManagement
            categories={categories}
            setCategories={setCategories}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
