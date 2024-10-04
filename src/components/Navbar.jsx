import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="bg-pink-500 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <Link to="/" className="mr-4 bg-white px-2 py-2 rounded-md hover:text-purple-500">
            Home
          </Link>
          <Link to="/about" className="mr-4 bg-white px-2 py-2 rounded-md hover:text-purple-500">
            About 
          </Link>
          <Link to="/products" className="mr-4 bg-white px-2 py-2 rounded-md hover:text-purple-500">
            Products
          </Link>
          <Link to="/supplies" className="mr-4 bg-white px-2 py-2 rounded-md hover:text-purple-500">
            Supplies
          </Link>
          <Link to="/learning" className="mr-4 bg-white px-2 py-2 rounded-md hover:text-purple-500">
            Learning
          </Link>
          
          <Link to="/contact" className="mr-4 bg-white px-2 py-2 rounded-md hover:text-purple-500">
            Contact
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/cart" className="mr-4 bg-white text-black px-2 py-2 rounded-md hover:text-purple-500">
            Cart
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
            className="bg-grad text-black px-2 py-2 rounded hover:bg-teal-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="mr-4 bg-white text-black px-2 py-2 rounded hover:text-purple-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="mr-4 bg-white text-black px-2 py-2 rounded hover:text-purple-500"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
