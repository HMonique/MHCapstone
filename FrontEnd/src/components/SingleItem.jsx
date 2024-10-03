import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreProvider } from "../store/ContextProvider";


function SingleItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useContext(StoreProvider);
  const [showCartOption , setShowCartOption] = useState(false);
 
  const [product, setProduct] = useState({});


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8080/CraftyCorner/product/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const addToCart = (e, product) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_CART", payload: product });
    setShowCartOption(true);
    setTimeout(() => setShowCartOption(false), 5000); 
  };

  const goToCart = () => {
    navigate("/cart");
  };


  if (!product) {
    return <div>Product not found</div>;
  }

  console.log(product)
  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate("/products")}
        className="mb-4 bg-yellow-300 text-pink-400 px-4 py-2 rounded hover:bg-teal-300"
      >
        Back to Products
      </button>
      {Object.keys(product).length === 0 ? 
        (<div> 
          <h1>Product not found</h1>
          </div> 
          ) :(
        
      <div className="bg- p-6 rounded-lg shadow-md">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-64 object-scale-down mb-4 rounded"
        />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-keppel font-bold text-xl mb-4">
          ${product.price.toFixed(2)}
        </p>
        
        <button className="w-auto bg-yellow-300 text-pink-600 px-4 py-2 rounded hover:bg-keppel hover:text-platinum transition-colors"
        onClick={(e) => addToCart(e, product)}>
          Add to Cart
        </button>
      </div>
)}
{showCartOption && (
        <div className="fixed bottom-2 right-2 bg-teal-400 text-platinum p-4 rounded-lg shadow-lg">
          <p className="mb-2">Item added to cart</p>
          <button
            className="bg-yellow-300 text-pink-600 px-2 py-2 rounded hover:bg-white hover:text-teal-400 transition-colors"
            onClick={goToCart}
          >
            Go to Cart
          </button>
        </div>

)}
    </div>
  );
}

export default SingleItem;