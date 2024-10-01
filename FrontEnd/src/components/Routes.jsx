// import React from "react";
// import { Routes as R, Route } from "react-router-dom";
// import { Home,Login,Register,AuthWrapper,SingleItem,Cart,Products,Learning,Supplies,About,Contact,LearningItem} from "./";

// function Routes({ isLoggedIn, handleLogin }) {
//   return (
//     <R>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/supplies" element={<Supplies />} />
//       <Route path="/learning" element={<Learning />} />
//       <Route path="/item/:id" element={<SingleItem />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/learning/:id" element={<LearningItem />} />
      
//       <Route 
//         path="/login" 
//         element={
//           <AuthWrapper title="Login">
//             <Login handleLogin={handleLogin} />
//           </AuthWrapper>
//         } 
//       />
//       <Route 
//         path="/register" 
//         element={
//           <AuthWrapper title="Register">
//             <Register />
//           </AuthWrapper>
//         } 
//       />
//     </R>
//   );
// }

// export default Routes;




import React from "react";
import { Routes as R, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Supplies from './Supplies';
import Learning from './Learning';
import SingleItem from './SingleItem';
import Cart from './Cart';
import Login from './Login';
import Register from './Register';
import AuthWrapper from './AuthWrapper';
import LearningItem from "./LearningItem";

function Routes({ isLoggedIn, handleLogin }) {
  return (
    <R>
      <Route path="/learning/url" element={<Learning />} />
      <Route path="/products" element={<Products />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/item/:id" element={<SingleItem />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/supplies" element={<Supplies />} />
      <Route path="/learningitem/:url" element={<LearningItem />} />
   
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
