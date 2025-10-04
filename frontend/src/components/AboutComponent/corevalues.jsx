import React, { useState, useEffect } from "react";
import {
  Eye,
  Lightbulb,
  Target,
  Users,
  Zap,
  Award,
  Shield,
  Heart,
  Star,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Rocket,
  Trophy,
  Compass,
  Brain,
} from "lucide-react";

export default function VisionPage() {
  const [scrollY, setScrollY] = useState(0);

  const images = {
    banner: "/AboutImg/vision.jpg",
    hero1: "/AboutImg/job1.jpg",
    hero2: "/AboutImg/bus.jpg",
    vision: "/AboutImg/found.jpg",
    believe: "/AboutImg/believe.jpg",
    become: "/AboutImg/become.jpg",
    businesses: "/AboutImg/business.jpg",
    professionals: "/AboutImg/profes.jpg",
    integrity:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    excellence:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    lastingValue:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Half Screen */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.banner}
            alt="Vision"
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div className="absolute inset-0 bg-[#0a1f44]/70"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/30 mb-6">
              <Eye className="w-5 h-5 text-white" />
              <span className="text-xs font-bold text-white tracking-wider">
                OUR FOUNDER'S VISION
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Recognizing the Power Behind
              <br />
              <span className="text-[#00809D]">Every Great Team</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Unsung Heroes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0a1f44] mb-6 leading-tight">
                Talent acquisition professionals are often the{" "}
                <span className="text-[#00809D]">unsung heroes</span> of
                organizational success
              </h2>

              <p className="text-lg text-[#0a1f44] leading-relaxed mb-8 opacity-80">
                Working behind the scenes to shape teams, drive growth, and
                build the future. Yet, their efforts often go uncelebrated,
                their impact underappreciated.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Users className="w-6 h-6" />,
                    text: "Shaping exceptional teams",
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    text: "Driving organizational growth",
                  },
                  {
                    icon: <Rocket className="w-6 h-6" />,
                    text: "Building the future workforce",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00809D] rounded-xl flex items-center justify-center text-white shadow-lg">
                      {item.icon}
                    </div>
                    <span className="text-base text-[#0a1f44] font-semibold">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Composition */}
            <div className="relative h-[450px]">
              {/* Floating Card Style */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <img
                  src={images.hero2}
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main Card */}
              <div className="absolute bottom-0 left-0 w-72 h-80 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                <img
                  src={images.hero1}
                  alt="Professional"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats Badge */}
              <div className="absolute top-1/2 right-4 z-20 bg-white rounded-2xl p-6 shadow-2xl border-2 border-[#00809D]">
                <div className="text-4xl font-black text-[#00809D] mb-1">
                  10K+
                </div>
                <div className="text-xs text-[#0a1f44] font-semibold">
                  Successful Placements
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image with Floating Badge */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={images.vision}
                  alt="Founder Vision"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute top-6 right-6 w-16 h-16 bg-[#00809D] rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#00809D]/10 rounded-full mb-6 border-2 border-[#00809D]">
                <Brain className="w-6 h-6 text-[#00809D]" />
                <span className="text-sm font-bold text-[#0a1f44]">
                  THE TURNING POINT
                </span>
              </div>

              <h2 className="text-4xl font-black text-[#0a1f44] mb-6 leading-tight">
                Our founder{" "}
                <span className="text-[#00809D]">saw things differently</span>
              </h2>

              <p className="text-lg text-[#0a1f44] mb-8 leading-relaxed opacity-80">
                He envisioned a future where talent acquisition is not just a
                function, but a{" "}
                <span className="font-bold text-[#00809D]">force</span> — one
                that is recognized, empowered, and rewarded.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Eye className="w-6 h-6" />,
                    title: "Recognized",
                    desc: "As a strategic force",
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Empowered",
                    desc: "With tools and support",
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: "Rewarded",
                    desc: "For excellence delivered",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-[#00809D] rounded-xl flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#0a1f44]">
                        {item.title}
                      </div>
                      <div className="text-sm text-[#0a1f44] opacity-70">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2 Tech Services Origin */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1f44] mb-6">
              That vision gave rise to{" "}
              <span className="text-[#00809D]">B2 Tech Services</span>
            </h2>
            <p className="text-xl text-[#0a1f44] opacity-80 max-w-4xl mx-auto leading-relaxed">
              More than a recruitment firm, B2 Tech is a{" "}
              <span className="font-bold text-[#00809D]">movement</span> — built
              on the values of integrity, excellence, and lasting value. It's a
              platform where:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "For Businesses",
                desc: "Find exceptional talent to fuel their growth",
                image: images.businesses,
                icon: <TrendingUp className="w-8 h-8" />,
              },
              {
                title: "For Professionals",
                desc: "Gain the tools, recognition, and support to elevate their craft and careers",
                image: images.professionals,
                icon: <Award className="w-8 h-8" />,
              },
            ].map((item, i) => (
              <div key={i} className="group relative">
                {/* Polaroid Style Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <div className="text-[#00809D]">{item.icon}</div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-[#0a1f44] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#0a1f44] opacity-80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-[#00809D]/5 to-[#0a1f44]/5 rounded-3xl p-12">
            <p className="text-2xl font-bold text-[#0a1f44] leading-relaxed">
              Today, B2 Tech Services stands as a trusted partner for those who
              understand that people are the true engine of progress — and that
              finding the right talent{" "}
              <span className="text-[#00809D]">changes everything</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-[#0a1f44] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#00809D] rounded-full mb-6">
              <Shield className="w-6 h-6" />
              <span className="text-sm font-black">OUR PROMISE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              More Than Recruitment — Real Results, Real Impact
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              At B2 Tech Services, we make a simple but powerful commitment: To
              deliver results that truly matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-black mb-4">Our Approach</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Driven by our founder's uncompromising passion for excellence
                and relentless pursuit of performance, we go far beyond
                traditional hiring practices. We deliver tailored, strategic
                talent solutions — built around your unique business goals and
                powered by speed, precision, and deep domain expertise.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-black mb-4">Our Impact</h3>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                Because with us, you're not just filling positions. You're
                building high-impact teams. Strengthening your organization.
                Laying the foundation for long-term success.
              </p>
              <div className="space-y-3">
                {[
                  "Precision-driven hiring",
                  "Strategic alignment",
                  "Exceptional outcomes — every time",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00809D] flex-shrink-0" />
                    <span className="text-lg font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1f44] mb-6">
              How We Work
            </h2>
            <p className="text-xl text-[#0a1f44] opacity-80 max-w-4xl mx-auto leading-relaxed">
              We operate as one unified team, blending individual strengths,
              diverse expertise, and shared values to drive collective success.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#00809D]/20">
            <p className="text-xl text-[#0a1f44] leading-relaxed text-center">
              Our collaborative approach allows us to navigate challenges with
              precision and agility, ensuring the best possible outcomes for
              every client, every time.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Integrity",
                image: images.integrity,
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: "Excellence",
                image: images.excellence,
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Lasting Value",
                image: images.lastingValue,
              },
            ].map((value, i) => (
              <div key={i} className="group">
                {/* Magazine Style Layout */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#00809D] rounded-xl flex items-center justify-center text-white">
                          {value.icon}
                        </div>
                        <h3 className="text-2xl font-black text-white">
                          {value.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Half Screen */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.become}
            alt="Join Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a1f44]/85"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/30 mb-8">
              <Compass className="w-6 h-6 text-white" />
              <span className="text-sm font-black text-white tracking-wider">
                JOIN THE MOVEMENT
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              This Is Where
              <br />
              <span className="text-[#00809D]">Talent Meets Vision</span>
            </h2>

            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Together, we celebrate the professionals who build teams and
              create lasting value that transforms industries.
            </p>

            <button className="px-10 py-4 bg-[#00809D] text-white rounded-full text-lg font-black shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center gap-3 group">
              <span>
                <a href="/softwaretraining">Start Your Journey</a>
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
