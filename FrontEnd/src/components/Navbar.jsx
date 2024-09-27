import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="bg-onyx text-platinum p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold mr-4">
            Logo
          </Link>
          <Link to="/" className="mr-4 hover:text-keppel">
            Home
          </Link>
          <Link to="/" className="mr-4 hover:text-keppel">
            Learning
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/cart" className="mr-8 bg-white text-black hover:bg-purple-500">
            🛒 Cart
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="mr-8 bg-white text-black px-4 py-2 rounded hover:bg-purple-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="mr-8 bg-white text-black px-4 py-2 rounded hover:bg-purple-500"
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
