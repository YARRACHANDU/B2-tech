import { useState } from "react";
import { Send, CheckCircle, AlertTriangle, Info } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", otp: "", message: "" });
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [status, setStatus] = useState("");

  // Independent loading states
  const [loadingOtp, setLoadingOtp] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendOtp = async () => {
    if (!form.email) return setStatus("⚠️ Please enter your email first");
    setLoadingOtp(true);
    try {
      const res = await fetch("https://b2techservic.onrender.com/api/contact/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email }),
      });
      const data = await res.json();
      setStatus(data.message || "OTP request completed.");
      if (data.success) setOtpSent(true);
    } catch {
      setStatus("❌ Error sending OTP. Please try again.");
    }
    setLoadingOtp(false);
  };

  const verifyOtp = async () => {
    if (!form.otp) return setStatus("⚠️ Please enter the OTP");
    setLoadingVerify(true);
    try {
      const res = await fetch("https://b2techservic.onrender.com/api/contact/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, otp: form.otp }),
      });
      const data = await res.json();
      setStatus(data.message || "Verification completed.");
      if (data.success) setVerified(true);
    } catch {
      setStatus("❌ Error verifying OTP. Please try again.");
    }
    setLoadingVerify(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!verified) return setStatus("⚠️ Please verify email first");
    setLoadingSubmit(true);
    try {
      const res = await fetch("https://b2techservic.onrender.com/api/contact", { // Updated endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.message || "Message sent successfully.");
      if (data.success) {
        setForm({ name: "", email: "", otp: "", message: "" });
        setOtpSent(false);
        setVerified(false);
      }
    } catch {
      setStatus("❌ Error sending message. Please try again.");
    }
    setLoadingSubmit(false);
  };

  // Status rendering with icons
  const renderStatus = () => {
    if (!status) return null;
    const classes = "mt-4 p-4 rounded-xl font-semibold flex items-center gap-2 shadow-md transition-all";
    if (status.toLowerCase().includes("success")) {
      return (
        <div className={`${classes} bg-green-100 text-green-800 border border-green-300`}>
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span>{status}</span>
        </div>
      );
    }
    if (status.toLowerCase().includes("error") || status.startsWith("⚠️") || status.startsWith("❌")) {
      return (
        <div className={`${classes} bg-red-100 text-red-800 border border-red-300`}>
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <span>{status}</span>
        </div>
      );
    }
    return (
      <div className={`${classes} bg-blue-100 text-blue-800 border border-blue-300`}>
        <Info className="w-5 h-5 text-blue-600" />
        <span>{status}</span>
      </div>
    );
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1f44] mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#00809D] focus:outline-none transition-colors"
            required
          />
        </div>

        {/* Email + OTP */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1f44] mb-2">
            Email Address
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              className="flex-1 p-4 border-2 border-gray-200 rounded-xl focus:border-[#00809D] focus:outline-none transition-colors"
              required
            />
       <button
  type="button"
  onClick={sendOtp}
  disabled={loadingOtp}
  className={`px-6 py-3 rounded-xl font-semibold text-white transition-colors shadow-lg ${
    loadingOtp
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-[#00809D] hover:bg-[#006b84] cursor-pointer"
  }`}
>
  {loadingOtp ? "Sending..." : "Send OTP"}
</button>

          </div>
        </div>

        {/* OTP Verification */}
        {otpSent && !verified && (
          <div>
            <label className="block text-sm font-semibold text-[#0a1f44] mb-2">
              Verification Code
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                name="otp"
                placeholder="Enter 6-digit OTP"
                value={form.otp}
                onChange={handleChange}
                className="flex-1 p-4 border-2 border-gray-200 rounded-xl focus:border-[#00809D] focus:outline-none transition-colors"
                required
              />
              <button
                type="button"
                onClick={verifyOtp}
                disabled={loadingVerify}
                className={`px-6 py-3 rounded-xl font-semibold text-white transition-colors shadow-lg ${
                  loadingVerify
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#00809D] hover:bg-[#006b84]"
                }`}
              >
                {loadingVerify ? "Verifying..." : "Verify"}
              </button>
            </div>
          </div>
        )}

        {/* Verified Banner */}
        {verified && (
          <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-xl">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Email verified successfully!</span>
          </div>
        )}

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1f44] mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            placeholder="Tell us how we can help you..."
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#00809D] focus:outline-none transition-colors resize-none"
            required
            disabled={!verified}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!verified || loadingSubmit}
          className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
            verified && !loadingSubmit
              ? "bg-[#00809D] hover:bg-[#006b84] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          <Send className="w-5 h-5" />
          {loadingSubmit ? "Processing..." : "Send Message"}
        </button>

        {/* Status */}
        {renderStatus()}
      </form>
    </div>
  );
}
