import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreProvider } from "../store/ContextProvider";


function SuppliesItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useContext(StoreProvider);
  const [showCartOption , setShowCartOption] = useState(false);
 
  const [supplies, setSupplies] = useState({});


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8080/CraftyCorner/supplies/${id}`);
        const data = await response.json();
        setSupplies(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  
  const addToCart = (e, supplies) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_CART", payload: supplies });
    setShowCartOption(true);
    setTimeout(() => setShowCartOption(false), 5000); 
  };

  const goToCart = () => {
    navigate("/cart");
  };


  if (!supplies) {
    return <div>Supply not found</div>;
  }

  console.log(supplies)
  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate("/supplies")}
        className="mb-4 bg-yellow-300 text-pink-400 px-4 py-2 rounded hover:bg-teal-300"
      >
        Back to Supplies
      </button>
      {Object.keys(supplies).length === 0 ? 
        (<div> 
          <h1>Supply not found</h1>
          </div> 
          ) :(
        
      <div className="bg- p-6 rounded-lg shadow-md">
        <img
          src={supplies.image_url}
          alt={supplies.name}
          className="w-full h-64 object-scale-down mb-4 rounded"
        />
        <h2 className="text-2xl font-bold mb-2">{supplies.name}</h2>
        <p className="text-gray-600 mb-4">{supplies.description}</p>
        <p className="text-keppel font-bold text-xl mb-4">
          ${supplies.price.toFixed(2)}
        </p>
        
        <button className="w-auto bg-yellow-300 text-pink-600 px-4 py-2 rounded hover:bg-keppel hover:text-platinum transition-colors"
          onClick={(e) => addToCart(e, supplies)}>
          Add to Cart
        </button>
      </div>
)}
    </div>
  );
}

export default SuppliesItem;