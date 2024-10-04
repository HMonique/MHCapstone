import React, { useContext } from "react";
import { StoreProvider } from "../store/ContextProvider";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const { state, dispatch } = useContext(StoreProvider);
  const { cart } = state;
  const notify = () => toast("Payment Successful!");
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-black">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4  text-pink-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${calculateTotal()}</p>
          </div>
        </>
      )}
       <div>
        <button className="mr-4 mt-60 bg-pink-600 text-black px-2 py-2 rounded hover:text-purple-500" onClick={notify}>Pay Now</button>
        <ToastContainer />
      </div>
      <button className="bg-yellow-300 text-pink-600 px-2 py-2 rounded mr-4 mt-10 hover:bg-teal-400" onClick={() => navigate(-1)}
        >Back to Previous Page</button>
    </div>
  );
}

export default Cart;







