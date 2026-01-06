import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logocx.png"; // Ensure this path is correct

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("userLogged", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-10 font-sans">
      {/* Logo */}
      <div className="mb-6">
        <img src={Logo} alt="Creativex Logo" className="h-20 w-[360px] object-contain rounded-md" />
      </div>

      {/* Login Box */}
      <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-[0_0_20px_rgba(11,31,92,0.2)]">
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#0B1F5C" }}>
          Login
        </h2>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-[#0B1F5C]/30" />
          <span className="px-2 text-sm" style={{ color: "#0B1F5C" }}>or</span>
          <div className="flex-grow h-px bg-[#0B1F5C]/30" />
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "#0B1F5C" }}>
              Email
            </label>
            <input
              type="email"
              required
              placeholder="enter your email"
              className="w-full px-4 py-2 border border-[#0B1F5C] rounded-md focus:outline-none focus:ring-2"
              style={{ fontSize: "1rem" }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "#0B1F5C" }}>
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-[#0B1F5C] rounded-md focus:outline-none focus:ring-2"
              style={{ fontSize: "1rem" }}
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="hover:underline font-medium"
              style={{ color: "#0B1F5C" }}
            >
              Forgot Password?
            </button>
            <button
              type="button"
              onClick={() => navigate("/sso-login")}
              className="hover:underline font-medium"
              style={{ color: "#0B1F5C" }}
            >
              Login with SSO
            </button>
          </div>

          <button
            type="submit"
            className="w-full text-white font-semibold py-2 rounded-md hover:brightness-90 transition"
            style={{ backgroundColor: "#0B1F5C" }}
          >
            Submit
          </button>
        </form>

        {/* Sign Up */}
        <p className="mt-6 text-center text-sm" style={{ color: "#0B1F5C" }}>
          New to Creativex?{" "}
          <Link to="/signup" className="font-semibold underline hover:opacity-80" style={{ color: "#0B1F5C" }}>
            Sign Up
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs space-x-4" style={{ color: "#0B1F5C" }}>
        <Link to="/terms" className="hover:underline">Terms of Use</Link>
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link to="/gdpr" className="hover:underline">GDPR Notice</Link>
        <Link to="/developer-policy" className="hover:underline">Developer Policy</Link>
      </div>
    </div>
  );
};

export default Login;