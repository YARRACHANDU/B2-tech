import { useEffect, useState } from "react";

export default function GallerySection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch backend data
  useEffect(() => {
    fetch("https://b2techservic.onrender.com/news/achievement") // your backend endpoint
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.achievements)) {
          setItems(data.achievements); // ✅ backend sends { achievements: [...] }
        } else {
          setItems([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load achievements");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1f44]">Our Achievements</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
           "Achievements appear dynamically as they’re unlocked." 
          </p>
        </div>

        {/* Loading / Error States */}
        {loading && <p className="text-center">Loading achievements...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && items.length === 0 && (
          <p className="text-center">No achievements found.</p>
        )}

        <div className="flex flex-wrap -m-4">
          {!loading &&
            items.map((item, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative h-80"> {/* fixed card height */}
                  <img
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                    src={item.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-lg overflow-y-auto">
                    
                    {/* Title */}
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {item.title}
                    </h1>

                    {/* Description */}
                    <p className="leading-relaxed text-sm mb-3">
                      {item.description}
                    </p>

                    {/* Date */}
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
