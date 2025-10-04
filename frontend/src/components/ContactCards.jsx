import { Phone, MapPin, Mail } from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
      {/* Phone */}
      <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-4">
          <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl text-[#0a1f44] mb-2">Phone</h3>
        <p className="text-gray-600 text-base sm:text-lg">+91-63640 53221</p>
        <p className="text-sm text-gray-500 mt-2">Mon-Fri 9AM-6PM IST</p>
      </div>

      {/* Location */}
      <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-4">
          <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl text-[#0a1f44] mb-2">Location</h3>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          <strong>B2Tech Services</strong>
          <br /> 655, A Block, AECS Layout, Kudlu, Bangalore-560068
        </p>
        <p className="text-sm text-gray-500 mt-2">Visit our office</p>
      </div>

      {/* Social Media */}
      <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-4">
          <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl text-[#0a1f44] mb-2">Social Media</h3>
        <div className="flex gap-6 mt-3 text-gray-600">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FaLinkedin className="w-6 h-6 hover:text-[#0077b5]" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FaTwitter className="w-6 h-6 hover:text-[#1DA1F2]" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FaInstagram className="w-6 h-6 hover:text-[#E4405F]" />
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-2">Follow us for updates</p>
      </div>
    </div>
  );
}
