import React, { useContext } from "react";
import Navbar from "./Navbar";
import { StoreProvider } from "../store/ContextProvider";
import { useEffect, useState } from "react";

function Learning() {
  const { state, dispatch } = useContext(StoreProvider);


 

  const [mydata, setMyData] = useState([]);
  useEffect(()=>{ async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/CraftyCorner/learning");
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
      {mydata.map((product, index) => (
        <div
          key={index}
          className="bg-platinum p-4 rounded-lg shadow-md cursor-pointer"
          onClick={() => handleItemClick(product.id)}
        >
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-gray-600 mb-2">{product.supplies}</p>
          <p className="text-keppel font-bold">${product.skilllevel}</p>
         
        </div>
      ))}
    </div>
  );
}

export default Learning;
