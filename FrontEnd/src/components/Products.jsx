import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreProvider } from "../store/ContextProvider";

function Products() {
  const { dispatch } = useContext(StoreProvider);
  const navigate = useNavigate();
  const [mydata, setMyData] = useState([]);
  const [showCartOption, setShowCartOption] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/CraftyCorner/product");
        const data = await response.json();
        setMyData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleItemClick = (id) => {
    navigate(`/item/${id}`);
  };

  const addToCart = (e, product) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_CART", payload: product });
    setShowCartOption(true);
    setTimeout(() => setShowCartOption(false), 5000); 
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const totalPages = Math.ceil(mydata.length / itemsPerPage);
  const currentProducts = mydata.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return; 
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-regular mb-6 text-center animate-fade-in">Products</h1>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="p-8 rounded-lg shadow-md cursor-pointer"
              onClick={() => handleItemClick(product.id)}
            >
              <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-68 object-cover mb-4 rounded"
                onError={(e) => {
                  e.target.src = '/path/to/placeholder/image.jpg';
                }}
              />
              <h2 className="text-lg font-semibold text-center mb-2">{product.name}</h2>
              <p className="text-xs text-black text-center mb-2">{product.description}</p>
              <p className="text-teal-400 font-light">${product.price.toFixed(2)}</p>
              <button
                className="mt-4 bg-yellow-300 text-pink-600 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition-colors"
                onClick={(e) => addToCart(e, product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        
        {showCartOption && (
          <div className="fixed bottom-2 right-2 bg-teal-400 text-white p-4 rounded-lg shadow-lg">
            <p className="mb-2">Item added to cart</p>
            <button
              className="bg-yellow-300 text-pink-600 px-2 py-2 rounded hover:bg-white hover:text-teal-400 transition-colors"
              onClick={goToCart}
            >
              Go to Cart
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;