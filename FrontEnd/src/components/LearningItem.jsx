import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function LearningItem() {
 
  const {state} = useLocation();
  console.log(state);
  const {url, name} = state;
  const [item, setItem] = useState(null);

  console.log(url);
  useEffect(() => {
   
    console.log(`Fetching data for learning item ${url}`);
  }, [url]);



  return (
    <div>
      <h1>{name}</h1>
      <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      {/* Display other item details here */}
    </div>
  );
}

export default LearningItem;