import { useState } from "react";
import {
  Users,
  Target,
  Award,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Handshake,
} from "lucide-react";

export default function TeamPage() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      name: "Hrushikesh Mohapatro",
      role: "Founder & CEO",
      image: "/AboutImg/ceo.png",
      description:
        "Visionary leader with 15+ years of experience in tech recruitment and business development.",
      highlight: true,
    },
    {
      name: "Jesika",
      role: "HR Director",
      image: "/AboutImg/hr.png",
      description:
        "Expert in talent acquisition and organizational development with a passion for people.",
      highlight: false,
    },
    {
      name: "Aswini",
      role: "Product Manager",
      image: "/AboutImg/pm.png",
      description:
        "Strategic thinker driving innovation and excellence in our recruitment solutions.",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#0a1f44] via-[#0a1f44] to-[#00809D]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00809D] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto" style={{marginTop:'80px'}}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Meet Our Team
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            The passionate professionals driving excellence in recruitment
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Founder Highlight */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-4">
                Leadership That Inspires
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto"></div>
            </div>

            <div className="bg-gradient-to-br from-[#0a1f44] to-[#00809D] rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-[500px] lg:h-auto">
                  <img
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44] to-transparent opacity-60"></div>
                </div>

                <div className="p-12 flex flex-col justify-center text-white">
                  <div className="mb-6">
                    <Sparkles className="w-12 h-12 text-[#00809D] mb-4" />
                    <h3 className="text-4xl font-bold mb-2">
                      {teamMembers[0].name}
                    </h3>
                    <p className="text-2xl text-blue-200 mb-4">
                      {teamMembers[0].role}
                    </p>
                    <div className="w-20 h-1 bg-[#00809D]"></div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-blue-100">
                    {teamMembers[0].description}
                  </p>
                  <div className="space-y-3">
                    {[
                      "15+ Years Industry Experience",
                      "Global Recruitment Expertise",
                      "Visionary Leadership",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#00809D] flex-shrink-0" />
                        <span className="text-blue-100">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Team Members */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">
                Our Core Leadership
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {teamMembers.slice(1).map((member, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44] via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-lg text-blue-200">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
              How We Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At B2 Tech Services, we operate as a cohesive team, maximizing
              each other's strengths to achieve collective success. Our
              collaborative approach enables us to tackle challenges
              effectively, ensuring the best outcomes for every client, every
              time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">
                Cohesive Team
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Working together seamlessly, leveraging diverse strengths to
                deliver exceptional results for every client engagement.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">
                Strategic Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tackling challenges with precision and strategy, ensuring
                optimal outcomes through collaborative problem-solving.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">
                Collective Success
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Maximizing team synergy to achieve outstanding results that
                exceed expectations every single time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] to-[#00809D]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Commitment to You
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-white/20 mb-12">
            <p className="text-xl md:text-2xl text-white leading-relaxed text-center mb-8">
              We are fully committed to delivering excellence in every project
              and relationship. We never accept anything less than the best,
              consistently working to meet and exceed your expectations.
            </p>
            <p className="text-lg md:text-xl text-blue-100 text-center">
              Every task, project, and client interaction is handled with the
              utmost care and precision, ensuring outstanding results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <Heart className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Unwavering Excellence
              </h3>
              <p className="text-blue-100 leading-relaxed">
                We never settle for less than exceptional. Every deliverable
                reflects our commitment to quality and precision.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <CheckCircle className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Exceeding Expectations
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Going beyond requirements to deliver results that consistently
                surpass what you anticipate from us.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Handshake className="w-16 h-16 text-[#00809D] mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
                Join Us on Our Journey
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                As we continue to provide exceptional recruitment services, we
                invite more organizations to partner with us. Whether you're
                looking to fill technical positions or scale your team, we're
                here to help you grow with top-tier talent.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Together, we can drive success and make a lasting impact on your
                organization's future.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Technical Position Fulfillment",
                  "Team Scaling Solutions",
                  "Top-Tier Talent Acquisition",
                  "Long-term Partnership Growth",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#00809D] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <button className="bg-[#00809D] hover:bg-[#006b84] text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                <a href="/contact">Partner With Us</a>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/AboutImg/team2.jpg"
                    alt="Teamwork"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/AboutImg/pro.webp"
                    alt="Meeting"
                    className="rounded-2xl shadow-xl w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="/AboutImg/believe.jpg"
                    alt="Success"
                    className="rounded-2xl shadow-xl w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/AboutImg/expert.jpg"
                    alt="Partnership"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
