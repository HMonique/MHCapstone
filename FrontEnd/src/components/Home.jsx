// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Home() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Welcome to Crafty Corner</h1>
//       <div className="relative inline-block text-left">
//         <div>
//           <button
//             onClick={toggleDropdown}
//             className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-saffron text-onyx hover:bg-keppel focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-keppel"
//           >
//             Menu
//             <svg
//               className="-mr-1 ml-2 h-5 w-5"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               aria-hidden="true"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         </div>

//         {isDropdownOpen && (
//           <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//             <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//               <Link
//                 to="/about"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-saffron hover:text-onyx"
//                 role="menuitem"
//                 onClick={() => setIsDropdownOpen(false)}
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/contact"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-saffron hover:text-onyx"
//                 role="menuitem"
//                 onClick={() => setIsDropdownOpen(false)}
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;



import React from "react";
import Products from "./Products";



function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Crafty Corner</h1>
       </div>
  );
}

export default Home;
