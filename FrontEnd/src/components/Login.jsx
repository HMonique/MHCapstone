import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const decryptPassword = async (encryptedPassword, key, iv) => {
 
  };

  const handleSubmit = async (e) => {
 
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setResetMessage("");

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      setResetMessage("Password reset instructions sent to your email.");
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
        {resetMessage && <p className="text-green-500">{resetMessage}</p>}
        <div>
          <label htmlFor="resetEmail" className="block text-sm font-medium text-onyx">
            Email
          </label>
          <input
            type="email"
            id="resetEmail"
            name="resetEmail"
            required
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-timberwolf border border-onyx rounded-md shadow-sm focus:outline-none focus:ring-keppel focus:border-keppel"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-platinum bg-saffron hover:bg-keppel focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-keppel"
          >
            Send Reset Instructions
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => setIsResettingPassword(false)}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-onyx bg-timberwolf hover:bg-platinum focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-keppel"
          >
            Back to Login
          </button>
        </div>
      </form>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-onyx">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-timberwolf border border-onyx rounded-md shadow-sm focus:outline-none focus:ring-keppel focus:border-keppel"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-onyx"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-timberwolf border border-onyx rounded-md shadow-sm focus:outline-none focus:ring-keppel focus:border-keppel"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-platinum bg-saffron hover:bg-keppel focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-keppel"
        >
          Sign In
        </button>
      </div>
      <div className="text-center">
        <button
          type="button"
          onClick={() => setIsResettingPassword(true)}
          className="text-keppel hover:underline focus:outline-none"
        >
          Forgot Password?
        </button>
      </div>
    </form>
  );
}

export default Login;