import ContactCards from "./ContactCards";
import ContactForm from "./Contactform";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] bg-gradient-to-r from-[#0a1f44] via-[#0a1f44] to-[#00809D] flex items-center justify-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-10 w-52 sm:w-72 h-52 sm:h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#00809D] rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            We're here to help and answer any questions you might have
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        {/* Contact Cards */}
        <ContactCards />

        {/* Info + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Left Info Section */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a1f44] mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Have a question or feedback? Fill out the form and we'll get back
              to you as soon as possible. Your email will be verified for
              security.
            </p>

            <div className="bg-gradient-to-br from-[#0a1f44] to-[#00809D] p-6 sm:p-8 rounded-2xl text-white shadow-lg">
              <h3 className="font-semibold text-lg mb-2">🔒 Secure Verification</h3>
              <p className="text-blue-100 text-sm sm:text-base">
                We use OTP verification to ensure the security of your
                communication and protect your information.
              </p>

              <h3 className="font-semibold text-lg mt-6 mb-2">⚡ Quick Response</h3>
              <p className="text-blue-100 text-sm sm:text-base">
                Our team typically responds within 24 hours during business
                days.
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
