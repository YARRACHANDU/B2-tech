export default function App() {
  return (
    <div className="flex justify-center items-center min-h-130 bg-gray-100"> {/* Added p-4 to reduce spacing */}
      <div className="flex flex-col md:flex-row max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden"> {/* max-w reduced */}
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="./pexels-pavel-danilyuk-7869123.jpg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 py-8 md:py-12 bg-white"> {/* Reduced padding */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1f44]">Our Growth</h2>
          <div className="w-20 h-1 bg-[#00809D] mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            From our beginnings in recruitment, we’ve evolved into a full-spectrum
            partner delivering end-to-end consulting, workforce solutions, and tech
            training that empower professionals and organizations at every stage.
          </p>
        </div>
      </div>
    </div>
  );
}
