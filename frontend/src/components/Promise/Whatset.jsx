import React, { useState, useEffect, useRef } from 'react';
import { Target, Zap, TrendingUp, Users, Award, CheckCircle, ArrowRight, Sparkles, Heart, Lightbulb, Rocket, Flame, Trophy, RefreshCw, Clock, Star, Shield, GitBranch, Compass } from 'lucide-react';
import {Link }from 'react-router-dom'

export default function B2PromisePage() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-observe]').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const beliefs = [
    { icon: RefreshCw, title: "Every Day is an Opportunity to Improve", desc: "Growth is a continuous journey. Every day offers a fresh chance to learn, evolve, and elevate.", color: "from-blue-500 to-cyan-500" },
    { icon: Rocket, title: "A Better Tomorrow Starts Today", desc: "We take meaningful action today to build a stronger, more successful future. Progress waits for no one.", color: "from-purple-500 to-pink-500" },
    { icon: Heart, title: "Making a Difference", desc: "We create value that lasts. For our clients, candidates, and communities, our goal is to leave a positive impact.", color: "from-red-500 to-orange-500" },
    { icon: Users, title: "Working Together", desc: "Collaboration is at the heart of our success. By nurturing strong partnerships, we move faster, smarter, and farther.", color: "from-green-500 to-emerald-500" },
    { icon: Flame, title: "Going the Extra Mile", desc: "Good enough is not part of our vocabulary. We consistently push beyond expectations to deliver outstanding results.", color: "from-amber-500 to-yellow-500" },
    { icon: Trophy, title: "Delivering Our Very Best", desc: "We take ownership of our work and every outcome. Excellence isn't just a goal — it's our standard.", color: "from-indigo-500 to-violet-500" }
  ];

  const differentiators = [
    { icon: Shield, title: "Unwavering Belief in Hard Work", desc: "Success is earned through dedication, grit, and consistent effort — never shortcuts." },
    { icon: Target, title: "Results-Driven Mindset", desc: "Grounded in deep industry expertise, we deliver solutions that produce measurable, impactful outcomes." },
    { icon: TrendingUp, title: "Culture of Continuous Improvement", desc: "We refuse to settle. Constantly innovating, learning, and raising the bar to exceed expectations." },
    { icon: GitBranch, title: "Commitment to Long-Term Partnerships", desc: "Our relationships go beyond placements — we invest in lasting connections that fuel sustained growth." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-cyan-50 overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>

      {/* Hero Section - Split Design */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8" style={{marginTop:'50px'}}>
              <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-[#00809D]">
                <Compass className="w-5 h-5 text-[#00809D] animate-spin" style={{ animationDuration: '8s' }} />
                <span className="font-bold text-[#0a1f44]">Our Promise</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-[#0a1f44] leading-tight">
                More Than Recruitment —
                <span className="block mt-2 bg-gradient-to-r from-[#00809D] to-cyan-500 bg-clip-text text-transparent">
                  Real Results, Real Impact
                </span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                At <strong className="text-[#00809D]">B2 Tech Services</strong>, we make a simple but powerful commitment: To deliver results that truly matter.
              </p>

              <div className="bg-gradient-to-br from-[#0a1f44] to-[#00809D] p-8 rounded-3xl text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <p className="text-lg leading-relaxed mb-6">
                  Driven by our founder's uncompromising passion for excellence and relentless pursuit of performance, we go far beyond traditional hiring practices.
                </p>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-cyan-300" />
                  <span className="font-semibold text-cyan-100">Building high-impact teams. Strengthening organizations.</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Target, text: "Precision-driven hiring" },
                  { icon: Zap, text: "Strategic alignment" },
                  { icon: Award, text: "Exceptional outcomes" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-md border border-cyan-100 hover:shadow-xl hover:border-[#00809D] transition-all group">
                    <item.icon className="w-5 h-5 text-[#00809D] group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-[#0a1f44]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#00809D]">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { value: "500+", label: "Success Stories", icon: Star },
                      { value: "98%", label: "Client Satisfaction", icon: Heart },
                      { value: "24hrs", label: "Avg. Response", icon: Clock },
                      { value: "100%", label: "Commitment", icon: Shield }
                    ].map((stat, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-4 text-center border border-cyan-200 hover:shadow-lg transition-all">
                        <stat.icon className="w-6 h-6 text-[#00809D] mx-auto mb-2" />
                        <div className="text-3xl font-bold text-[#0a1f44] mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#00809D] to-cyan-500 rounded-2xl p-6 text-white text-center">
                    <Trophy className="w-12 h-12 mx-auto mb-3" />
                    <p className="font-bold text-lg">Excellence is Our Standard</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart - Staggered Cards */}
      <div id="differentiators" data-observe className="relative py-20 bg-gradient-to-br from-[#0a1f44] to-[#00809D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">What Sets Us Apart</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-white mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, idx) => (
              <div
                key={idx}
                className={`transform transition-all duration-700 ${
                  visibleSections.has('differentiators') 
                    ? 'translate-x-0 opacity-100' 
                    : idx % 2 === 0 ? '-translate-x-20 opacity-0' : 'translate-x-20 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white pt-2">{item.title}</h3>
                    </div>
                    <p className="text-cyan-100 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-white rounded-3xl px-10 py-6 shadow-2xl">
              <p className="text-2xl font-bold text-[#0a1f44]">
                We Don't Just Fill Roles — We Fuel Your <span className="text-[#00809D]">Growth and Success</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Beliefs Section - Hexagonal Grid */}
      <div id="beliefs" data-observe className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a1f44] mb-6">We Believe In</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our beliefs aren't just words — they are the foundation of our culture, the compass for every decision, and the fuel behind our relentless pursuit of excellence.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00809D] to-cyan-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((belief, idx) => {
              const Icon = belief.icon;
              return (
                <div
                  key={idx}
                  className={`transform transition-all duration-700 ${
                    visibleSections.has('beliefs') ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="group relative h-full">
                    {/* Hexagonal Effect with Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00809D] to-cyan-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20"></div>
                    
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#00809D] h-full flex flex-col">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${belief.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#0a1f44] mb-4 leading-tight">
                        {belief.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed flex-grow">
                        {belief.desc}
                      </p>

                      <div className="mt-6 h-1 w-full bg-gradient-to-r from-transparent via-[#00809D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-[#0a1f44] to-[#00809D] rounded-3xl px-12 py-8 shadow-2xl transform hover:scale-105 transition-all">
              <p className="text-2xl font-bold text-white">
                These Aren't Just Values — They Are the <span className="text-cyan-300">Principles That Power Everything We Do</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work - Timeline Style */}
      <div className="relative py-20 bg-gradient-to-br from-slate-100 to-cyan-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a1f44] mb-6">How We Work</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00809D] to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-[#00809D]">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00809D] to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#0a1f44] mb-3">One Unified Team</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We operate as one unified team, blending individual strengths, diverse expertise, and shared values to drive collective success.
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#00809D] to-transparent"></div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#0a1f44] mb-3">Precision & Agility</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our collaborative approach allows us to navigate challenges with precision and agility, ensuring the best possible outcomes for every client, every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commitment Section - Split Design */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#0a1f44] mb-8">Our Commitment to You</h2>
              <p className="text-2xl text-[#00809D] font-bold mb-8">Excellence is more than a goal — it's our unwavering standard.</p>
              
              <div className="space-y-4">
                {[
                  "We never settle for good enough",
                  "We uphold the highest levels of care, precision, and professionalism",
                  "We treat every project and partnership with the attention it truly deserves",
                  "We strive not only to meet but to consistently exceed your expectations"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg border-2 border-transparent hover:border-[#00809D] transition-all group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00809D] to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-[#0a1f44] font-semibold text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#0a1f44] to-[#00809D] rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-all">
                <Shield className="w-20 h-20 mb-6 text-cyan-300" />
                <p className="text-2xl font-bold leading-relaxed mb-6">
                  When you choose B2 Tech Services, you're not just hiring a service provider —
                </p>
                <p className="text-xl text-cyan-100 leading-relaxed">
                  you're gaining a <span className="font-bold text-white">dedicated partner</span> invested in your long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Journey */}
      <div className="relative py-20 bg-gradient-to-br from-[#0a1f44] via-[#00809D] to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 text-cyan-300 mx-auto mb-6 animate-pulse" />
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Join Us on Our Journey
          </h2>
          
          <p className="text-2xl text-cyan-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            As we continue to set new standards in recruitment and talent solutions, we invite forward-thinking organizations to partner with us.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Target, text: "Filling highly specialized technical roles" },
              { icon: TrendingUp, text: "Scaling rapidly and need reliable hiring" },
              { icon: GitBranch, text: "Seeking strategic, long-term talent support" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                <item.icon className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
                <p className="text-white font-semibold text-lg">{item.text}</p>
              </div>
            ))}
          </div>

          <Link to='/companyPhilosophy'>
          <button className="group relative bg-white text-[#0a1f44] px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-cyan-400/50 transition-all hover:scale-110 inline-flex items-center gap-3">
            Let's Build the Future — Together
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
          </button>
</Link>
          <p className="mt-8 text-cyan-200 text-lg">
            We're here to power your growth with top-tier talent and comprehensive, end-to-end hiring solutions.
          </p>
        </div>
      </div>

    
    </div>
  );
}