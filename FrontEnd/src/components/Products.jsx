import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreProvider } from "../store/ContextProvider";
import { useEffect, useState } from "react";

function Products() {
  const { state, dispatch } = useContext(StoreProvider);
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/item/${id}`);
  };

  const addToCart = (e, product) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const [mydata, setMyData] = useState([]);
  useEffect(()=>{ async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/CraftyCorner/product");
        const data = await response.json();
        setMyData(data);
      } catch (error) {
        console.error(error);
      }}
    fetchData();
      }, []);
  console.log(mydata);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mydata.map((product, index) => {
        console.log(product.image_url); // Log the image URL here
        return (
          <div
            key={index}
            className="bg-platinum p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => handleItemClick(product.id)}
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
              onError={(e) => {
                e.target.src = 'path/to/placeholder/image.jpg'; // Fallback image
              }}
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-keppel font-bold">${product.price.toFixed(2)}</p>
            <button
              className="mt-4 bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel hover:text-platinum transition-colors"
              onClick={(e) => addToCart(e, product)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;