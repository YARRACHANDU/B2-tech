import React, { useState, useEffect } from 'react';
import { CheckCircle, Zap, TrendingUp, Users, Mail, MessageCircle, Star, ArrowRight, Sparkles, Award, Target, FileText } from 'lucide-react';

export default function ResumeServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: FileText, title: "Customized & Professional", desc: "Tailored to your strengths" },
    { icon: Zap, title: "ATS-Friendly Format", desc: "Beat the bots, reach humans" },
    { icon: Target, title: "Industry-Aligned", desc: "Right keywords, right impact" },
    { icon: Award, title: "Proven Track Record", desc: "Hundreds of success stories" }
  ];

  const stats = [
    { value: "500+", label: "Resumes Crafted" },
    { value: "85%", label: "Interview Rate" },
    { value: "₹2000", label: "Starting Price" },
    { value: "24hrs", label: "Turnaround" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-cyan-100 mt-8">
  <Sparkles className="w-4 h-4 text-[#00809D]" />
  <span className="text-sm font-semibold text-[#0a1f44]">B2 Tech Services</span>
</div>

          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0a1f44] mb-6 leading-tight">
            Your Resume is Your<br />
            <span className="bg-gradient-to-r from-[#00809D] to-cyan-600 bg-clip-text text-transparent">
              First Impression
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Make it count. We craft <strong className="text-[#00809D]">powerful, results-driven, ATS-optimized</strong> resumes that showcase your value — clearly and confidently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="group relative bg-[#00809D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-[#00809D] rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur"></div>
            </a>
            <a href="#pricing" className="bg-white text-[#0a1f44] px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#00809D] hover:bg-[#00809D] hover:text-white">
              View Pricing
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className={`bg-white rounded-2xl p-6 shadow-lg border border-cyan-100 text-center transform transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="text-4xl font-bold text-[#00809D] mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section with Unique Card Design */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-4">
            Why Choose Our Services?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-500 cursor-pointer ${
                  activeFeature === idx ? 'border-[#00809D] scale-105 shadow-2xl' : 'border-transparent hover:border-cyan-200'
                }`}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00809D]/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00809D] to-cyan-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0a1f44] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                  
                  <div className={`mt-4 flex items-center gap-2 text-[#00809D] font-semibold transition-all ${activeFeature === idx ? 'opacity-100' : 'opacity-0'}`}>
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Active</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Section - Diagonal Split Design */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f44] to-[#00809D] transform -skew-y-3"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform skew-y-3">
          <div className="transform -skew-y-3">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Stand Out From<br />The Crowd
                </h2>
                <p className="text-cyan-100 text-lg mb-8 leading-relaxed">
                  In a world where hiring managers spend just seconds scanning resumes, you need more than just a document — you need a powerful personal brand.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Pass ATS screening with optimized keywords",
                    "Showcase achievements with quantifiable results",
                    "Professional formatting that catches the eye",
                    "Industry-specific language that resonates"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                      <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                      <span className="text-white font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-cyan-400">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00809D] to-cyan-500 border-2 border-white flex items-center justify-center text-white font-bold">
                          {i}
                        </div>
                      ))}
                    </div>
                    <div className="text-[#0a1f44] font-bold text-lg">500+ Happy Clients</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 border-2 border-yellow-200">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[#0a1f44] italic font-medium mb-4">
                      "After working with you, we started receiving a significant number of calls! Our job search, which had been stagnant for months, completely turned around."
                    </p>
                    <div className="text-gray-600 font-semibold">— Satisfied Client</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-4">
            Unlock Your Dream Job
          </h2>
          <p className="text-xl text-gray-600">Whether you're a fresher or industry veteran — we've got you covered</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-8 shadow-2xl border-2 border-[#00809D] transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#00809D] to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              MOST POPULAR
            </div>
            
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-[#0a1f44] mb-2">₹2000</div>
              <div className="text-gray-600 font-medium">Starting Price</div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Customized professional writing",
                "ATS-optimized format",
                "Industry-aligned keywords",
                "Unlimited revisions",
                "24-hour delivery option",
                "Free cover letter template"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00809D] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#0a1f44] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="block w-full bg-[#00809D] text-white text-center py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all hover:bg-cyan-600 transform hover:scale-105">
              Get Started Now
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="bg-gradient-to-br from-[#0a1f44] via-[#00809D] to-cyan-600 rounded-3xl p-12 shadow-2xl text-center text-white">
    <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" aria-hidden="true" />
    
    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
      Ready to Make Your Resume Work for You?
    </h2>
    
    <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
      Let us take the guesswork out of your job search. Reach out today and give your career the boost it deserves.
    </p>

    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <a 
        href="mailto:hrushikesh@b2techservices.in" 
        className="group flex items-center gap-3 bg-white text-[#0a1f44] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" 
        rel="noopener noreferrer" 
        aria-label="Send email to hrushikesh at b2 tech services"
      >
        <Mail className="w-5 h-5 text-[#00809D]" aria-hidden="true" />
        <span>hrushikesh@b2techservices.in</span>
      </a>
      
      <a 
        href="https://wa.me/916364053221" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600" 
        aria-label="Chat on WhatsApp with phone number +91 63640 53221"
      >
        <MessageCircle className="w-5 h-5" aria-hidden="true" />
        <span>+91 63640 53221</span>
      </a>
    </div>
  </div>
</div>


      
    </div>
  );
}