import React, { useContext, useState } from "react";
import { StoreProvider } from "../store/ContextProvider";

function Cart() {
  const { state, dispatch } = useContext(StoreProvider);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const emptyCart = () => {
    if (window.confirm("Are you sure you want to empty your cart?")) {
      dispatch({ type: "CLEAR_CART" });
    }
  };

  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {
    setIsProcessingPayment(true);
    setPaymentError(null);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // If payment is successful, clear the cart
      dispatch({ type: "CLEAR_CART" });
      alert("Payment successful! Thank you for your purchase.");
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentError("An error occurred while processing your payment. Please try again.");
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <button
            onClick={emptyCart}
            className="mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Empty Cart
          </button>
          {state.cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-2"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
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
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>
          
          {/* Payment section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Payment</h3>
            {paymentError && <p className="text-red-500 mb-4">{paymentError}</p>}
            <button
              onClick={handlePayment}
              disabled={isProcessingPayment}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
            >
              {isProcessingPayment ? "Processing..." : "Proceed to Payment"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
