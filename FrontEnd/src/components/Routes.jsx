import React from "react";
import { Routes as R, Route } from "react-router-dom";
import { Home, Login, Register, AuthWrapper, SingleItem, Cart, Products, Learning, Supplies} from "./";
import LearningItem from "./LearningItem";

function Routes({ isLoggedIn, handleLogin }) {
  return (
    <R>
      <Route path="/learning" element={<Learning />} />
      <Route path="/products" element={<Products />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/item/:id" element={<SingleItem />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/supplies" element={<Supplies />} />
   
      <Route path="/login" element={
          <AuthWrapper title="Login">
            <Login handleLogin={handleLogin} />
          </AuthWrapper>
        }
      />
      <Route path="/register" element={
          <AuthWrapper title="Register">
            <Register />
          </AuthWrapper>
        }
      />
    </R>
  );
}

export default Routes;
