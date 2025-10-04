import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SendOtp() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // new state
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true); // start loading

    if (!email) {
      setMessage("Email is required");
      setLoading(false);
      return;
    }

    // Regex to match exact email
    const emailPattern = /^BIKSHAMAIAHTULLIMILLI@GMAIL\.COM$/i;

    if (!emailPattern.test(email)) {
      setMessage("Email must be HRUSHIKESH@B2TECHSERVICES.IN");
      setLoading(false);
      return;
    }

    const emailToSend =
      email === email.toUpperCase() ? email.toLowerCase() : email;

    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/sendotp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailToSend }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage("OTP sent to your email!");
        navigate("/verify-otp");
      } else {
        setMessage(data.message || "Error sending OTP");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error");
    } finally {
      setLoading(false); // stop loading after API call finishes
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-white text-sm opacity-90">
              Enter your email to receive verification code
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSendOtp} className="px-8 py-8">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-[#0a1f44] text-sm font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#00809D] transition-colors text-[#0a1f44] placeholder-gray-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 shadow-md ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00809D] text-white hover:bg-[#006b85] hover:shadow-lg transform hover:-translate-y-0.5"
              }`}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>

            {message && (
              <div
                className={`mt-4 p-3 rounded-lg text-sm text-center ${
                  message.includes("sent")
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {message}
              </div>
            )}
          </form>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-center text-xs text-[#0a1f44] opacity-70">
              Secure authentication powered by OTP verification
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
