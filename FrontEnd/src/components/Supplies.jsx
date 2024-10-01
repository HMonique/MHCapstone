import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Supplies() {
  const [supplies, setSupplies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSupplies = async () => {
      try {
        const response = await fetch("http://localhost:8080/CraftyCorner/supplies"); // Adjust the URL as necessary
        if (!response.ok) {
          throw new Error("Failed to fetch supplies");
        }
        const data = await response.json();
        setSupplies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSupplies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(supplies);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {supplies.map((supply) => (
        <div key={supply.id} className="bg-platinum p-4 rounded-lg shadow-md">
          <div className="w-1/2 h-48 mb-4 rounded bg-gray-200 flex items-center justify-center">
            <img
              src={supply.image_url} // Ensure this matches your JSON key
              alt={supply.name}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <h2 className="text-lg font-semibold mb-2">{supply.name}</h2>
          <p className="text-gray-600 mb-2">{supply.description}</p>
          <p className="text-keppel font-bold">${supply.price.toFixed(2)}</p>
          <Link to={`/supply/${supply.id}`} className="mt-4 bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel">
            Add to Cart
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Supplies;





// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { StoreProvider } from "../store/ContextProvider";

// function Supplies() {
//   const { dispatch } = useContext(StoreProvider);
//   const navigate = useNavigate();
//   const [supplies, setSupplies] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:8080/CraftyCorner/supplies")
//       .then(response => response.json())
//       .then(data => {
//         setSupplies(data);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         console.error("Error fetching supplies:", error);
//         setIsLoading(false);
//       });
//   }, []);

//   const handleItemClick = (id) => {
//     navigate(`/supply/${id}`);
//   };

//   const addToCart = (e, supply) => {
//     e.stopPropagation();
//     dispatch({ type: "ADD_TO_CART", payload: supply });
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {supplies.map((supply) => (
//         <div
//           key={supply.id}
//           className="bg-platinum p-4 rounded-lg shadow-md cursor-pointer"
//           onClick={() => handleItemClick(supply.id)}
//         >
//           <div className="w-full h-48 mb-4 rounded bg-gray-200 flex items-center justify-center">
//             <img
//               src={supply.image_url || 'https://via.placeholder.com/400x300?text=No+Image'}
//               alt={supply.name}
//               className="w-full h-full object-cover rounded"
//             />
//           </div>
//           <h2 className="text-xl font-semibold mb-2">{supply.name}</h2>
//           <p className="text-gray-600 mb-2">{supply.description}</p>
//           <p className="text-keppel font-bold">${(supply.price || 0).toFixed(2)}</p>
//           <button
//             className="mt-4 bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel hover:text-platinum transition-colors"
//             onClick={(e) => addToCart(e, supply)}
//           >
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Supplies;