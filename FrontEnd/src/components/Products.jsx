import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreProvider } from "../store/ContextProvider";

function Products() {
  const { dispatch } = useContext(StoreProvider);
  const navigate = useNavigate();
  const [mydata, setMyData] = useState([]);
  const [showCartOption, setShowCartOption] = useState(false);

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

  console.log(mydata);
  
  return (
    <div className="relative">
      {/* Gradient Header */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {mydata.map((product) => (
          <div
            key={product.id}
            className=" p-8 rounded-lg shadow-md cursor-pointer"
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
            <p className="text-keppel font-light">${product.price.toFixed(2)}</p>
            <button
              className="mt-4 bg-yellow-300 text-pink-600 px-4 py-2 rounded hover:bg-teal-400 hover:text-platinum transition-colors"
              onClick={(e) => addToCart(e, product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
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

export default Products;




// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { StoreProvider } from "../store/ContextProvider";

// function Products() {
//   const { dispatch } = useContext(StoreProvider);
//   const navigate = useNavigate();
//   const [mydata, setMyData] = useState([]);
//   const [showCartOption, setShowCartOption] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("http://localhost:8080/CraftyCorner/product");
//         const data = await response.json();
//         setMyData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleItemClick = (id) => {
//     navigate(`/item/${id}`);
//   };

//   const addToCart = (e, product) => {
//     e.stopPropagation();
//     dispatch({ type: "ADD_TO_CART", payload: product });
//     setShowCartOption(true);
//     setTimeout(() => setShowCartOption(false), 5000); 
//   };

//   const goToCart = () => {
//     navigate("/cart");
//   };
//   console.log(mydata);
//   return (
//     <div className="relative">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {mydata.map((product) => (
//           <div
//             key={product.id}
//             className="bg-platinum p-4 rounded-lg shadow-md cursor-pointer"
//             onClick={() => handleItemClick(product.id)}
//           >
//             <img
//               src={product.image_url}
//               alt={product.name}
//               className="w-full h-68 object-cover mb-4 rounded"
//               onError={(e) => {
//                 e.target.src = '/path/to/placeholder/image.jpg';
//               }}
//             />
//             <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//             <p className="text-gray-600 mb-2">{product.description}</p>
//             <p className="text-keppel font-bold">${product.price.toFixed(2)}</p>
//             <button
//               className="mt-4 bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel hover:text-platinum transition-colors"
//               onClick={(e) => addToCart(e, product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//       {showCartOption && (
        
//         <div className="fixed bottom-4 right-4 bg-keppel text-platinum p-4 rounded-lg shadow-lg">
//           <p className="mb-2">Item added to cart!</p>
//           <button
//             className="bg-saffron text-onyx px-4 py-2 rounded hover:bg-platinum hover:text-keppel transition-colors"
//             onClick={goToCart}
//           >
//             Go to Cart
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Products;