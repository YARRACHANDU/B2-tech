import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/verifyotp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setMessage(data.message || "Invalid OTP");
      }
    } catch (err) {
      setMessage("Server error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-md px-6">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
          {/* Header Section */}
          <div className="bg-[#00809D] px-8 py-10 text-center">
            <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 text-[#00809D]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Verify Your Identity
            </h2>
            <p className="text-white text-sm opacity-90">
              Enter the verification code sent to your email
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleVerifyOtp} className="px-8 py-8">
            <div className="mb-6">
              <label
                htmlFor="otp"
                className="block text-[#0a1f44] text-sm font-semibold mb-2"
              >
                Verification Code
              </label>
              <input
                id="otp"
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#00809D] transition-colors text-[#0a1f44] placeholder-gray-400 text-center text-2xl tracking-widest font-semibold"
                required
                maxLength="6"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#00809D] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#006b85] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Verify & Continue
            </button>

            {message && (
              <div
                className={`mt-4 p-3 rounded-lg text-sm text-center ${
                  message.includes("success") || message.includes("verified")
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {message}
              </div>
            )}

            <div className="mt-6 text-center">
              <button
                type="button"
                className="text-[#00809D] text-sm font-medium hover:underline"
                onClick={() => navigate(-1)}
              >
                ← Back to login
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-center text-xs text-[#0a1f44] opacity-70">
              Didn't receive the code? Check your spam folder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
