// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function LearningItem() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [item, setItem] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchLearningItem(id);
//   }, [id]);

//   const fetchLearningItem = async (itemId) => {
//     try {
//       setLoading(true);
//       // Replace this with your actual API call
//       const response = await fetch(`https://localhost:8080/learning/${itemId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch learning item');
//       }
//       const data = await response.json();
//       setItem(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   const handleGoBack = () => {
//     navigate(-1); // This will navigate back to the previous page
//   };

//   if (loading) return <div className="text-center p-4">Loading...</div>;
//   if (error) return <div className="text-center p-4 text-red-500">Error: {error}</div>;
//   if (!item) return <div className="text-center p-4">No item found</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <button
//         onClick={handleGoBack}
//         className="mb-4 bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel"
//       >
//         Back
//       </button>
//       <div className="bg-platinum p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4">{item.name}</h1>
//         <p className="text-gray-600 mb-4">{item.description}</p>
//         {item.image && (
//           <img
//             src={item.image}
//             alt={item.name}
//             className="w-full h-64 object-cover mb-4 rounded"
//           />
//         )}
//         {item.content && (
//           <div className="prose max-w-none">
//             {/* Assuming content is HTML. If it's markdown, you'd need to use a markdown parser here */}
//             <div dangerouslySetInnerHTML={{ __html: item.content }} />
//           </div>
//         )}
//         {item.tags && item.tags.length > 0 && (
//           <div className="mt-4">
//             <h2 className="text-xl font-semibold mb-2">Tags:</h2>
//             <div className="flex flex-wrap gap-2">
//               {item.tags.map((tag, index) => (
//                 <span key={index} className="bg-keppel text-platinum px-2 py-1 rounded-full text-sm">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default LearningItem;








import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Learning() {
  const [mydata, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (id, url, name, description, skilllevel) => {
    navigate(`/learning/${id}`, {state: {id: id, name: name, description: description, url: url, skilllevel: skilllevel}});
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
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

  return (
    
    <div className="container mx-auto p-4">
   
      <h1 className="text-3xl font-regular mb-6 text-center">Learning Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mydata.map((item) => (
          
          <div
            key={item.url}
            
            className="bg-white p-4 rounded-md mx-0 my-0 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleItemClick(item.id, item.url, item.name, item.description,)}
          >
            <div className="h-8 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <iframe width="325" height="275" src={item.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <h2 className="text-sm text-center font-normal mb-2">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learning;