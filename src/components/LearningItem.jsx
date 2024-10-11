import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";


function LearningItem() {
 
  const {state} = useLocation();
  console.log(state);
  const {url, name} = state;
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  console.log(url);
  useEffect(() => {
   
    console.log(`Fetching data for learning item ${url}`);
  }, [url]);
  return (
    <div classsName="flex items-center justify-center h-screen"> 
         <button
        onClick={() => navigate("/learning")}
        className="mb-4 bg-yellow-300 text-pink-400 px-4 py-2 rounded hover:bg-teal-300"
      >
        Back to Products
      </button>
     
    <iframe width="1000" 
      height="800" 
      src={url} 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen
      className="mx-auto mt-20"
      ></iframe>
  
    </div>
  );
}

export default LearningItem;