import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Learning() {
  const [mydata, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (id, url, name, description) => {
    navigate(`/learning/${id}`, {state: {id: id, name: name, description: description, url: url}});
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8080/CraftyCorner/mylearning");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        setMyData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-violet-700">Error: {error}</div>;

  return (
    
    <div className="container mx-auto p-4">
   
      <h1 className="text-3xl font-regular mb-6 text-center animate-fade-in">Learning Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mydata.map((item) => (
          
          <div
            key={item.url}
            
            className="bg-white p-4 rounded-md mx-0 my-0 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleItemClick(item.id, item.url, item.name, item.description,)}
          >
            <div className="h-8 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <iframe width="264" height="275" src={item.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <h2 className="text-sm text-center font-normal mb-2">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learning;