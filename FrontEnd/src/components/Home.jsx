import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-6 text-black">
        Crafty Corner
      </h1>
      <Products />
    </div>
  );
}

export default Home;
