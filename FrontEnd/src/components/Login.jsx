import React, { useState } from "react";
import axios from 'axios'; // Optional: only if using axios

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setError(""); // Clear any previous errors

    try {
      // Replace with your actual backend API endpoint
      const response = await axios.post("http://localhost:8080/CraftyCorner/login", {
        email,
        password,
      });

      // Assuming the response contains a user object and a token
      const { user, token } = response.data;

      // Call the handleLogin function passed as a prop
      handleLogin(user, token); // Pass the user and token to the parent component

    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setResetMessage("");

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      setResetMessage("Password reset link sent to email.");
      setResetEmail("");
    } catch (error) {
      console.error("Password reset error:", error);
      setResetMessage("An error occurred. Please try again.");
    }
  };

  if (isResettingPassword) {
    return (
      <form className="space-y-6" onSubmit={handleResetPassword}>
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        {resetMessage && <p className="text-violet-700">{resetMessage}</p>}
        <div>
          <label htmlFor="resetEmail" className="block text-sm font-medium text-pink-600">
            Email
          </label>
          <input
            type="email"
            id="resetEmail"
            name="resetEmail"
            required
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-pink-700 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-400"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-300 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
          >
            Send Reset Instructions
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => setIsResettingPassword(false)}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-pink-600 bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
          >
            Back to Login
          </button>
        </div>
      </form>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && <p className="text-violet-700">{error}</p>}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-pink-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-pink-600 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-400"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-pink-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-pink-600 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-400"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-pink-600 bg-yellow-300 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
        >
          Sign In
        </button>
      </div>
      <div className="text-center">
        <button
          type="button"
          onClick={() => setIsResettingPassword(true)}
          className="text-teal-400 hover:underline focus:outline-none"
        >
          Forgot Password?
        </button>
      </div>
    </form>
  );
}

export default Login;







// import React, { useState } from "react";

// function Login({ handleLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isResettingPassword, setIsResettingPassword] = useState(false);
//   const [resetEmail, setResetEmail] = useState("");
//   const [resetMessage, setResetMessage] = useState("");

//   const decryptPassword = async (encryptedPassword, key, iv) => {
 
//   };

//   const handleSubmit = async (e) => {
 
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     setResetMessage("");

//     try {
//       await new Promise(resolve => setTimeout(resolve, 1000)); 
//       setResetMessage("Password reset link sent to email.");
//       setResetEmail("");
//     } catch (error) {
//       console.error("Password reset error:", error);
//       setResetMessage("An error occurred. Please try again.");
//     }
//   };

//   if (isResettingPassword) {
//     return (
//       <form className="space-y-6" onSubmit={handleResetPassword}>
//         <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
//         {resetMessage && <p className="text-violet-700">{resetMessage}</p>}
//         <div>
//           <label htmlFor="resetEmail" className="block text-sm font-medium text-pink-600">
//             Email
//           </label>
//           <input
//             type="email"
//             id="resetEmail"
//             name="resetEmail"
//             required
//             value={resetEmail}
//             onChange={(e) => setResetEmail(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 bg-white border border-pink-700 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-400"
//           />
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-300 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
//           >
//             Send Reset Instructions
//           </button>
//         </div>
//         <div>
//           <button
//             type="button"
//             onClick={() => setIsResettingPassword(false)}
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-pink-600 bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
//           >
//             Back to Login
//           </button>
//         </div>
//       </form>
//     );
//   }

//   return (
//     <form className="space-y-6" onSubmit={handleSubmit}>
//       {error && <p className="text-violet-700">{error}</p>}
//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-pink-600">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mt-1 block w-full px-3 py-2 bg-white border border-pink-600 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-400"
//         />
//       </div>
//       <div>
//         <label
//           htmlFor="password"
//           className="block text-sm font-medium text-pink-600"
//         >
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mt-1 block w-full px-3 py-2 bg-white border border-pink-600 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-400"
//         />
//       </div>
//       <div>
//         <button
//           type="submit"
//           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-pink-600 bg-yellow-300 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
//         >
//           Sign In
//         </button>
//       </div>
//       <div className="text-center">
//         <button
//           type="button"
//           onClick={() => setIsResettingPassword(true)}
//           className="text-teal-400 hover:underline focus:outline-none"
//         >
//           Forgot Password?
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Login;