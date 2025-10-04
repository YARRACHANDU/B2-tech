import React, { useEffect, useState } from "react";

export default function Flashnews({ token }) {
  const [flashnews, setFlashnews] = useState("");
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    const fetchFlashnews = async () => {
      try {
        const res = await fetch("http://localhost:5000/news/flashnews", {
          headers,
        });
        if (res.ok) {
          const data = await res.json();
          setFlashnews(data.flashnews || "");
        }
      } catch (err) {
        console.error(err);
      }
    };
    if (token) fetchFlashnews();
  }, [token]);

  const saveFlashnews = async () => {
    try {
      const res = await fetch("https://b2techservic.onrender.com/news/flashnews", {
        method: "PUT",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ flashnews }),
      });

      if (res.ok) {
        alert("Saved Successfully ✅");
      } else {
        alert("Failed to save. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error occurred while saving.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* Header Section */}
      <div className="bg-[#00809D] px-6 py-4 border-b border-[#006b85]">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-md">
            <svg
              className="w-5 h-5 text-[#00809D]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white">Flash News</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <label
          htmlFor="flashnews"
          className="block text-[#0a1f44] text-sm font-semibold mb-3"
        >
          Breaking News Message
        </label>
        <input
          id="flashnews"
          type="text"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#00809D] transition-colors text-[#0a1f44] placeholder-gray-400 mb-4"
          value={flashnews}
          onChange={(e) => setFlashnews(e.target.value)}
          placeholder="Enter breaking news headline..."
        />

        <button
          onClick={saveFlashnews}
          className="w-full bg-[#00809D] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#006b85] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
            />
          </svg>
          Save Flash News
        </button>
      </div>

      {/* Footer Info */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <p className="text-xs text-[#0a1f44] opacity-70 flex items-center">
          <svg
            className="w-4 h-4 mr-1.5 text-[#00809D]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          This message will be displayed prominently to all users
        </p>
      </div>
    </div>
  );
}
