import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="relative bg-gray-100 py-16 px-4">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          What <span className="text-[#00809D]">Our Clients Say</span>
        </h2>
        <p className="mt-3 text-gray-500 text-sm sm:text-base">
          Our Clients send us bunch of smiles with our services <br className="hidden sm:block" />
          and we love them
        </p>
      </div>

      {/* Floating Avatars (hidden on small screens for simplicity) */}
      <div className="absolute inset-0 hidden md:flex justify-center items-center pointer-events-none">
        <div className="relative w-full max-w-4xl h-[28rem]">
          <img src="https://i.pravatar.cc/60?img=1" alt="" className="absolute top-0 left-10 w-12 sm:w-14 h-12 sm:h-14 rounded-full border-4 border-white shadow-lg" />
          <img src="https://i.pravatar.cc/60?img=2" alt="" className="absolute top-10 right-10 w-14 sm:w-16 h-14 sm:h-16 rounded-full border-4 border-white shadow-lg" />
          <img src="https://i.pravatar.cc/60?img=3" alt="" className="absolute left-0 bottom-10 w-10 sm:w-12 h-10 sm:h-12 rounded-full border-4 border-white shadow-lg" />
          <img src="https://i.pravatar.cc/60?img=4" alt="" className="absolute right-0 bottom-20 w-12 sm:w-14 h-12 sm:h-14 rounded-full border-4 border-white shadow-lg" />
          <img src="https://i.pravatar.cc/60?img=5" alt="" className="absolute top-20 left-1/4 w-10 sm:w-12 h-10 sm:h-12 rounded-full border-4 border-white shadow-lg" />
          <img src="https://i.pravatar.cc/60?img=6" alt="" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-8 sm:h-10 rounded-full border-4 border-white shadow-lg" />
        </div>
      </div>

      {/* Main Testimonial */}
      <div className="relative mt-12 sm:mt-16 flex flex-col items-center">
        {/* Center avatar */}
        <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src="https://i.pravatar.cc/150?img=7" alt="Client" className="w-full h-full object-cover" />
        </div>

        {/* Testimonial card */}
        <div className="mt-6 sm:mt-8 bg-white shadow-lg rounded-xl p-6 sm:p-8 max-w-md sm:max-w-lg text-center relative">
          <Quote className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-purple-500 w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full p-2 shadow" />
          <p className="text-gray-600 italic text-sm sm:text-base leading-relaxed">
           “Thanks to their resume service, I landed interviews at top companies within weeks!”
          </p>

          <h4 className="mt-5 font-semibold text-indigo-900 text-base sm:text-lg">
            Becky Nelson
          </h4>

          {/* Stars */}
          <div className="mt-2 flex justify-center gap-1 text-yellow-400 text-sm sm:text-base">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
