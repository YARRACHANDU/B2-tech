import { useState, useEffect } from "react";
import {
  TrendingUp,
  Rocket,
  Heart,
  Users,
  Zap,
  Award,
  Target,
  CheckCircle,
  Star,
  Sparkles,
} from "lucide-react";

export default function ValuesPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const values = [
    {
      icon: TrendingUp,
      title: "Every Day is an Opportunity to Improve",
      description:
        "Growth is a continuous journey. Every day offers a fresh chance to learn, evolve, and elevate — in ourselves, our services, and our relationships.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Rocket,
      title: "A Better Tomorrow Starts Today",
      description:
        "We take meaningful action today to build a stronger, more successful future. Progress waits for no one — and neither do we.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "Making a Difference",
      description:
        "We create value that lasts. For our clients, candidates, and communities, our goal is to leave a positive and enduring impact through everything we do.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Working Together",
      description:
        "Collaboration is at the heart of our success. By nurturing strong partnerships — within our team and with our clients — we move faster, smarter, and farther.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Going the Extra Mile",
      description:
        "Good enough is not part of our vocabulary. We consistently push beyond expectations to deliver outstanding results that speak volumes.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Award,
      title: "Delivering Our Very Best",
      description:
        "We take ownership of our work and every outcome. Excellence isn't just a goal — it's our standard.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .float-animation {
          animation: float 15s infinite ease-in-out;
        }
      `,
        }}
      />

      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1f44] via-[#0a1f44] to-[#00809D]">
        {/* Background Image - Add your image URL here */}
        <div className="absolute inset-0">
          {/* <img 
            src="YOUR_IMAGE_URL_HERE" 
            alt="Values Banner" 
            className="w-full h-full object-cover opacity-30"
          /> */}
        </div>

        {/* Animated Background Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-96 h-96 bg-[#00809D] rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto"style={{marginTop:'70px'}}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            We Believe In
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our beliefs aren't just words — they are the foundation of our
            culture, the compass for every decision, and the fuel behind our
            relentless pursuit of excellence.
          </p>
        </div>
      </div>

      {/* Values Grid Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] text-center mb-6">
            What Drives Us Every Single Day
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1f44] mb-4 group-hover:text-[#00809D] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Movement Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] to-[#00809D]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More Than a Recruitment Firm
            </h2>
            <p className="text-2xl text-blue-100 font-light">
              B2 Tech is a movement — built on integrity, excellence, and
              lasting value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#00809D]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                For Businesses
              </h3>
              <p className="text-blue-100 text-lg">
                Find exceptional talent to fuel your growth and drive innovation
                forward
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-[#00809D]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                For Professionals
              </h3>
              <p className="text-blue-100 text-lg">
                Gain the tools, recognition, and support to elevate your craft
                and career
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-white font-semibold mb-6">
              B2 Tech Services stands as a trusted partner for those who
              understand that
            </p>
            <p className="text-2xl md:text-3xl text-[#00809D] font-bold bg-white/8 inline-block px-8 py-4 rounded-full">
              People are the true engine of progress
            </p>
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
                Culture of Continuous Improvement
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We refuse to settle. Constantly innovating, learning, and
                raising the bar to exceed expectations.
              </p>
              <div className="space-y-4">
                {[
                  "Never settling for good enough",
                  "Pushing boundaries every day",
                  "Learning and adapting constantly",
                  "Setting new industry standards",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#00809D] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/AboutImg/in.jpg"
                  alt="Innovation"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img
                  src="/AboutImg/growth.jpg"
                  alt="Growth"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/AboutImg/team2.jpg"
                  alt="Teamwork"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
                <img
                  src="/AboutImg/leader.jpg"
                  alt="Leadership"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proven Excellence Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0a1f44] mb-6">
              Proven Excellence
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#00809D] mb-6">
              Leadership That Sets the Standard
            </h3>
          </div>

          <div className="bg-gradient-to-br from-[#0a1f44] to-[#00809D] p-12 rounded-3xl shadow-2xl text-white mb-12">
            <p className="text-xl leading-relaxed mb-6">
              Renowned for consistently exceeding expectations, our founder has
              earned the trust of engineering and talent acquisition leaders
              around the globe. His track record isn't just built on performance
              — it's built on partnership, precision, and an unwavering
              commitment to quality.
            </p>
            <p className="text-xl leading-relaxed">
              But his drive to be the best goes beyond personal ambition. It's
              the foundation of B2 Tech Services' culture — a culture that
              inspires excellence, accountability, and impact at every level.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h4 className="text-2xl font-bold text-[#0a1f44] mb-8 text-center">
              This relentless pursuit of excellence ensures every client
              engagement delivers:
            </h4>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-16 h-16 bg-[#00809D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-xl font-bold text-[#0a1f44] mb-2">
                  Exceptional Talent
                </h5>
                <p className="text-gray-600">
                  Top-tier professionals who drive real results
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-16 h-16 bg-[#00809D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-xl font-bold text-[#0a1f44] mb-2">
                  Strategic Alignment
                </h5>
                <p className="text-gray-600">
                  Perfect matches for your vision and goals
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-16 h-16 bg-[#00809D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-xl font-bold text-[#0a1f44] mb-2">
                  Measurable Results
                </h5>
                <p className="text-gray-600">
                  Tangible outcomes you can count on
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-[#0a1f44] mb-4">
                Every client. Every time. Without compromise.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#00809D] to-[#0a1f44]"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20 float-animation"
              style={{
                width: Math.random() * 10 + 5 + "px",
                height: Math.random() * 10 + 5 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            At B2 Tech Services, These Aren't Just Values
          </h2>
          <p className="text-2xl md:text-3xl text-blue-100 mb-8">
            They Are the Principles That Power Everything We Do
          </p>
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
            We don't just connect talent with opportunity; we build the
            foundation for your future success.
          </p>
          <button className="bg-white text-[#00809D] px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            <a href="/contact">Partner With Us Today</a>
          </button>
        </div>
      </div>
    </div>
  );
}
