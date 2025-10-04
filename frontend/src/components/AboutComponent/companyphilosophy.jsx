import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom"

export default function B2TechLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll('[id^="section-"]')
      .forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f44] via-[#0a1f44] to-[#00809D]"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z' stroke='rgba(255,255,255,0.05)' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-6 lg:space-y-8">
                <div className="inline-block"  style={{marginTop:'70px'}}>
                  <span className="px-4 py-2 bg-[#00809D]/30 border border-[#00809D]/40 rounded-full text-blue-200 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Enterprise Talent Solutions
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Welcome to
                  <br />
                  <span className="text-[#00809D]">B2 Tech Services</span>
                </h1>

                <p className="text-xl sm:text-2xl lg:text-3xl text-blue-200 font-light">
                  Empowering Talent. Enabling Growth.
                </p>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
                  At B2 Tech Services, we started with a sharp focus on
                  recruitment—and from that solid foundation, we've grown into a
                  dynamic, end-to-end talent solutions partner.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-[#00809D] hover:bg-[#006b84] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                    <Link to="/recruitmentservice">Explore Services</Link>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300">
                    <Link to="/contact">Contact Us</Link>
                  </button>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-2xl lg:rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-[#00809D]/20 to-[#0a1f44]/20 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                    <div className="aspect-[4/3] rounded-xl lg:rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                      <img
                        src="/AboutImg/pro.webp"
                        alt="Professional Talent Solutions"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                      <svg
                        className="w-6 h-6 text-[#00809D]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-24 h-24 lg:w-40 lg:h-40 bg-[#00809D] rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-32 h-32 lg:w-48 lg:h-48 bg-[#0a1f44] rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="section-about"
        className={`py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-1000 ${
          visibleSections["section-about"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div
                  className="absolute -inset-8 bg-gradient-to-r from-[#00809D] via-[#0a1f44] to-[#00809D] opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700"
                  style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                ></div>
                <div className="relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-300 opacity-40 transform scale-105"
                    style={{
                      borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
                      animation: "morph 8s ease-in-out infinite",
                    }}
                  ></div>
                  <div
                    className="relative overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700 aspect-[4/3] bg-gray-200"
                    style={{
                      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    }}
                  >
                    <img
                      src="/AboutImg/team1.jpg"
                      alt="Team Collaboration"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00809D]/30 via-transparent to-[#0a1f44]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#00809D] to-cyan-400 rounded-full opacity-60 blur-2xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#0a1f44] to-[#00809D] rounded-full opacity-60 blur-2xl"></div>
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                      <svg
                        className="w-10 h-10 text-[#00809D]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-4 lg:space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full">
                <svg
                  className="w-5 h-5 text-[#00809D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-[#00809D] font-semibold text-sm sm:text-base">
                  Our Mission
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a1f44] leading-tight">
                To Empower Professionals and Organizations to Thrive in the
                Digital Age
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                In a world where technology evolves at lightning speed, our
                mission is simple yet impactful: To empower professionals and
                organizations to thrive in the digital age.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Driven by deep industry insight and a passion for excellence, we
                specialize in connecting high-performing talent with
                mission-critical opportunities across specialized tech and
                business domains.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#00809D] flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-[#0a1f44] text-sm sm:text-base">
                    Whether you're a company scaling rapidly or a professional
                    seeking your next big move
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#00809D] flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-[#0a1f44] text-sm sm:text-base">
                    We're here to accelerate your success with tailored
                    solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why B2 Tech Services */}
      <section
        id="section-why"
        className={`py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${
          visibleSections["section-why"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-3 lg:mb-4">
              Why B2 Tech Services?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We don't just fill roles—we build careers and drive business
              outcomes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Expertise that Delivers",
                description:
                  "Proven experience in navigating niche markets and complex talent needs with precision and strategic insight.",
                gradient: "from-[#00809D] to-[#0a1f44]",
                image: "/AboutImg/expert.jpg",
              },
              {
                title: "People-First Approach",
                description:
                  "We prioritize meaningful relationships and long-term partnerships that create sustainable value for all stakeholders.",
                gradient: "from-[#0a1f44] to-[#00809D]",
                image: "/AboutImg/app.jpg",
              },
              {
                title: "Agile & Adaptive",
                description:
                  "We evolve with the market, ensuring you always stay ahead of the curve in a rapidly changing landscape.",
                gradient: "from-[#00809D] to-cyan-600",
                image: "/AboutImg/agile.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00809D]/10 to-[#0a1f44]/10 group-hover:from-[#00809D]/20 group-hover:to-[#0a1f44]/20 transition-all duration-500"></div>

                  <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90 shadow-2xl flex items-center justify-center text-white overflow-hidden`}
                      style={{
                        clipPath:
                          "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <svg
                    className="absolute top-4 right-4 w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0a1f44] mb-3 lg:mb-4 group-hover:text-[#00809D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 lg:mt-16 text-center">
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#00809D] px-4">
              Your Go-To Partner for Hiring Excellence in Specialized Tech &
              Business Domains
            </p>
          </div>
        </div>
      </section>

      {/* Growth Journey */}
      <section
        id="section-journey"
        className={`py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-1000 ${
          visibleSections["section-journey"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-3 lg:mb-4">
              Our Growth Journey
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#00809D] font-semibold px-4">
              From Recruitment to End-to-End Talent & Tech Solutions
            </p>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Recruitment Excellence",
                description:
                  "B2 Tech Services began with one mission: to connect top talent with the right opportunities. We established ourselves as a trusted recruitment partner.",
                year: "Phase 1",
                shapeType: "wave",
                image: "/AboutImg/excellence.jpg",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
                title: "Strategic Consulting",
                description:
                  "Expanded into full-spectrum consulting services, providing strategic workforce planning and organizational development solutions.",
                year: "Phase 2",
                shapeType: "triangle",
                image: "/AboutImg/star.jpg",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Workforce Solutions",
                description:
                  "Developed comprehensive talent management, deployment strategies, and end-to-end workforce solutions for enterprise clients.",
                year: "Phase 3",
                shapeType: "pentagon",
                image: "/AboutImg/diamond.jpg",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
                title: "Tech Training Programs",
                description:
                  "Launched industry-leading training programs to upskill individuals and teams, future-proofing careers and organizations.",
                year: "Phase 4",
                shapeType: "hexagon",
                image: "/AboutImg/star1.jpg",
              },
            ].map((milestone, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-6 lg:gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    {milestone.shapeType === "wave" && (
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#00809D] to-[#0a1f44] opacity-20 blur-2xl"></div>
                        <div
                          className="relative overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700 aspect-[4/3] bg-gray-200"
                          style={{
                            borderRadius: "55% 45% 60% 40% / 50% 55% 45% 50%",
                            animation: "morph 10s ease-in-out infinite",
                          }}
                        >
                          <img
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-[#00809D]/30 to-[#0a1f44]/30"></div>
                        </div>
                      </div>
                    )}

                    {milestone.shapeType === "triangle" && (
                      <div className="relative flex items-center justify-center h-80">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f44] to-[#00809D] opacity-20 blur-3xl"></div>
                        <div className="relative w-full max-w-md aspect-square transform group-hover:rotate-180 transition-transform duration-1000">
                          <div
                            className="absolute inset-0 shadow-2xl overflow-hidden bg-gray-200"
                            style={{
                              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                            }}
                          >
                            <img
                              src={milestone.image}
                              alt={milestone.title}
                              className="w-full h-full object-cover transform group-hover:-rotate-180 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f44]/30 to-[#00809D]/30"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {milestone.shapeType === "pentagon" && (
                      <div className="relative flex items-center justify-center h-80">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-[#00809D] opacity-20 blur-3xl"></div>
                        <div className="relative w-full max-w-md aspect-square transform group-hover:rotate-[72deg] transition-transform duration-1000">
                          <div
                            className="absolute inset-0 shadow-2xl overflow-hidden bg-gray-200"
                            style={{
                              clipPath:
                                "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                            }}
                          >
                            <img
                              src={milestone.image}
                              alt={milestone.title}
                              className="w-full h-full object-cover transform group-hover:-rotate-[72deg] transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-[#00809D]/30"></div>
                          </div>
                          <div
                            className="absolute inset-4 border-4 border-cyan-300 opacity-40"
                            style={{
                              clipPath:
                                "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                            }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {milestone.shapeType === "hexagon" && (
                      <div className="relative flex items-center justify-center h-80">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00809D] to-[#0a1f44] opacity-20 blur-3xl animate-pulse"></div>
                        <div className="relative w-full max-w-md aspect-square transform group-hover:rotate-180 transition-transform duration-1000">
                          <div
                            className="absolute inset-0 shadow-2xl overflow-hidden bg-gray-200"
                            style={{
                              clipPath:
                                "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                            }}
                          >
                            <img
                              src={milestone.image}
                              alt={milestone.title}
                              className="w-full h-full object-cover transform group-hover:-rotate-180 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00809D]/40 to-[#0a1f44]/40"></div>
                          </div>
                          <div className="absolute top-0 right-0 w-4 h-4 bg-[#00809D] rounded-full animate-pulse"></div>
                          <div
                            className="absolute bottom-0 left-0 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                          <div
                            className="absolute top-1/2 right-0 w-3 h-3 bg-[#0a1f44] rounded-full animate-pulse"
                            style={{ animationDelay: "1s" }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-3 lg:space-y-4">
                  <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 rounded-full">
                    <span className="text-[#00809D] font-semibold text-xs sm:text-sm">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      {milestone.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0a1f44]">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section
        id="section-training"
        className={`py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a1f44] via-[#0a1f44] to-[#00809D] text-white transition-all duration-1000 ${
          visibleSections["section-training"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <svg
                className="w-5 h-5 text-[#00809D]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <span className="text-blue-200 font-semibold text-sm sm:text-base">
                Training Excellence
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Transform Your Career with Expert Training
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Stay ahead of the curve with our cutting-edge training programs,
              designed to upskill individuals and teams in the most in-demand
              technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                ),
                title: "Full Stack Development",
                courses: "Python, React, Node.js",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "AI & Machine Learning",
                courses: "TensorFlow, PyTorch, NLP",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                ),
                title: "UI/UX Design",
                courses: "Figma, Adobe XD, Design Thinking",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                ),
                title: "Cloud & DevOps",
                courses: "AWS, Azure, Kubernetes",
                color: "from-green-500 to-teal-500",
              },
            ].map((course, idx) => (
              <div
                key={idx}
                className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-sm text-blue-200">{course.courses}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00809D] to-cyan-500 opacity-20 blur-3xl animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <img
                    src="/AboutImg/train.jpg"
                    alt="Training"
                    className="rounded-xl aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500 bg-gray-300"
                  />
                  <img
                    src="/AboutImg/excellence.jpg"
                    alt="Excellence"
                    className="rounded-xl aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500 bg-gray-300"
                  />
                  <img
                    src="/AboutImg/star.jpg"
                    alt="Success"
                    className="rounded-xl aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500 bg-gray-300"
                  />
                  <img
                    src="/AboutImg/diamond.jpg"
                    alt="Growth"
                    className="rounded-xl aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500 bg-gray-300"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-[#0a1f44]">
                      1000+ Graduates
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose Our Training?
                </h3>
                <div className="space-y-4">
                  {[
                    "Industry-expert instructors with real-world experience",
                    "Hands-on projects and practical assignments",
                    "Flexible learning schedules for working professionals",
                    "Job placement assistance and career guidance",
                    "Lifetime access to course materials and updates",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#00809D] flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-blue-100">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "UI/UX Design", value: "95%" },
                  { label: "Python", value: "92%" },
                  { label: "Salesforce", value: "98%" },
                  { label: "Cloud Computing", value: "90%" },
                  { label: "Data Analytics", value: "94%" },
                  { label: "Full Stack", value: "96%" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
                  >
                    <div className="text-2xl font-bold text-[#00809D] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-[#0a1f44] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-blue-50 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2">
                <Link to="/softwaretraining">Explore Training Programs</Link>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00809D] to-[#0a1f44]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Ready to Transform Your Talent Strategy?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 lg:mb-12 text-blue-100">
            Let's unlock the full potential of talent together—because the right
            people make all the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#00809D] px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              <Link to="/resumeServices"> Partner With Us</Link>
            </button>
            <button className="bg-[#0a1f44] text-white border-2 border-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:bg-[#0a1f44]/90">
              <Link to="/foundersVision">Find Your Next Role</Link>
            </button>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }
      `,
        }}
      />
    </div>
  );
}
