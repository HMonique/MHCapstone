import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function LearningItem() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch the individual item data here
    // For now, we'll just log the id
    console.log(`Fetching data for learning item ${id}`);
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h1>{item.name}</h1>
      {/* Display other item details here */}
    </div>
  );
}

export default LearningItem;