import React, { useEffect, useState } from "react";

export default function FlashNewsScroller() {
  // Initialize with welcome message
  const [flashnews, setFlashnews] = useState([
    "WELCOME TO B2tech services"
  ]);

  useEffect(() => {
    const fetchFlashnews = async () => {
      try {
        const res = await fetch("https://b2techservic.onrender.com/news/flashnew");
        if (res.ok) {
          const data = await res.json();
          // Ensure flashnews is always an array
          if (Array.isArray(data.flashnews)) {
            setFlashnews(data.flashnews);
          } else if (typeof data.flashnews === "string") {
            setFlashnews([data.flashnews]);
          } else {
            // fallback to welcome message if invalid data
            setFlashnews(["WELCOME TO B2tech services"]);
          }
        } else {
          setFlashnews(["WELCOME TO B2tech services"]);
        }
      } catch (err) {
        console.error(err);
        setFlashnews(["WELCOME TO B2tech services"]);
      }
    };

    fetchFlashnews();
  }, []);

  return (
    <div>
      {/* White scrolling text below navbar */}
      <div className="relative w-full overflow-hidden py-2">
       <div className="inline-block whitespace-nowrap animate-marquee">
  {flashnews.map((item, idx) => (
    <span key={idx} className="mr-8 text-2xl font-bold text-[#00809D]">
      <h1>💥 {item}</h1>
    </span>
  ))}
</div>


        {/* Marquee animation */}
        <style>
          {`
            @keyframes marquee {
              0%   { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee {
              display: inline-block;
              white-space: nowrap;
              animation: marquee 20s linear infinite;
            }
          `}
        </style>
      </div>
    </div>
  );
}
