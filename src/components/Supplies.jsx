import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreProvider } from "../store/ContextProvider";

function Supplies() {
  const { dispatch } = useContext(StoreProvider);
  const navigate = useNavigate();
  const [supplies, setSupplies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/CraftyCorner/supplies");
        const data = await response.json();
        setSupplies(data);
      } catch (error) {
        console.error("Error fetching supplies:", error);
      }
    }
    fetchData();
  }, []);

  const handleItemClick = (id) => {
    navigate(`/supply/${id}`);
  };

  const addToCart = (e, supply) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_CART", payload: supply });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {supplies.map((supply) => (
        <div
          key={supply.id}
          className="bg-platinum p-4 rounded-lg shadow-md cursor-pointer"
          onClick={() => handleItemClick(supply.id)}
        >
          <img
            src={supply.image_url}
            alt={supply.name}
            className="w-full h-48 object-cover mb-4 rounded"
            onError={(e) => {
              e.target.src = '/path/to/placeholder/image.jpg'; // Use an actual path to a placeholder image
            }}
          />
          <h2 className="text-xl font-semibold mb-2">{supply.name}</h2>
          <p className="text-gray-600 mb-2">{supply.description}</p>
          <p className="text-keppel font-bold">${supply.price.toFixed(2)}</p>
          <button
            className="mt-4 bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel hover:text-platinum transition-colors"
            onClick={(e) => addToCart(e, supply)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Supplies;