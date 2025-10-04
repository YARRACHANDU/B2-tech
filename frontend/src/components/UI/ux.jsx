import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Users, Sparkles, Target, Brain, PenTool, TestTube, Smartphone, TrendingUp, Clock, Award, Zap, Mail, ArrowRight, Check, Layers, Palette, MousePointer, Grid3x3, Lightbulb, BarChart3, Heart, RefreshCw, DollarSign } from 'lucide-react';
import {Link} from 'react-router-dom'

const UXTrainingPage = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedBenefit, setSelectedBenefit] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const learningModules = [
    { icon: Target, title: "User Research & Persona", color: "from-purple-500 to-pink-500" },
    { icon: Brain, title: "Information Architecture", color: "from-blue-500 to-cyan-500" },
    { icon: PenTool, title: "Interactive Prototyping", color: "from-green-500 to-emerald-500" },
    { icon: TestTube, title: "Usability Testing", color: "from-orange-500 to-red-500" },
    { icon: Layers, title: "Design Tools Mastery", color: "from-indigo-500 to-purple-500" },
    { icon: Smartphone, title: "Mobile-First Design", color: "from-pink-500 to-rose-500" }
  ];

  const businessImpact = [
    { icon: MousePointer, title: "Increase Engagement", value: "87%", description: "Users stay longer with intuitive interfaces" },
    { icon: TrendingUp, title: "Boost Conversions", value: "3.5x", description: "Seamless journeys drive action" },
    { icon: RefreshCw, title: "Reduce Bounce", value: "-65%", description: "Easy navigation keeps users" },
    { icon: Heart, title: "Brand Loyalty", value: "92%", description: "Great UX creates repeat customers" },
    { icon: DollarSign, title: "Enhanced ROI", value: "4x", description: "Design improvements impact revenue" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
          style={{
            transform: `translate(-${mousePosition.x * 0.03}px, -${mousePosition.y * 0.03}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
      </div>

      {/* Hero Section with Morphing Gradient */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-full shadow-xl border border-gray-100 animate-bounce mt-8">
  <Sparkles className="w-5 h-5 text-[#00809D]" />
  <span className="text-[#0a1f44] font-semibold">UI/UX Design Training</span>
</div>


            {/* Main Title with Gradient Animation */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#0a1f44] leading-tight">
                Designing
                <span className="block bg-gradient-to-r from-[#00809D] via-cyan-500 to-[#00809D] bg-clip-text text-transparent animate-gradient bg-300%">
                  Experiences
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600">Empowering Talent.</p>
            </div>

            {/* Animated CTA Button */}
            <div className="flex justify-center gap-4 pt-8">
              <Link to='/softwareTraining'>
              <button className="group relative px-8 py-4 bg-[#00809D] text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-[#00809D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button></Link>
            </div>

            {/* Floating Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { label: "Students Trained", value: "5000+", icon: Users },
                { label: "Success Rate", value: "94%", icon: Award },
                { label: "Industry Partners", value: "100+", icon: Zap }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-gray-100 hover:scale-105 transition-all duration-300"
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    animation: 'fadeInUp 0.8s ease-out forwards'
                  }}
                >
                  <stat.icon className="w-8 h-8 text-[#00809D] mb-3" />
                  <div className="text-3xl font-bold text-[#0a1f44]">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </section>

      {/* Learning Modules - Hexagon Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a1f44] mb-4">What You'll Master</h2>
            <p className="text-xl text-gray-600">Interactive learning modules designed for real-world success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningModules.map((module, i) => (
              <div
                key={i}
                className="group relative"
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`
                  relative h-64 bg-white rounded-3xl shadow-xl overflow-hidden
                  transform transition-all duration-500 
                  ${activeCard === i ? 'scale-105 rotate-1' : 'hover:scale-105'}
                `}>
                  {/* Gradient Background */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${module.color} opacity-10
                    group-hover:opacity-20 transition-opacity duration-300
                  `} />
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className={`
                        w-16 h-16 bg-gradient-to-br ${module.color} 
                        rounded-2xl flex items-center justify-center mb-4
                        transform transition-transform duration-300 group-hover:rotate-12
                      `}>
                        <module.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0a1f44] mb-2">{module.title}</h3>
                    </div>
                    
                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00809D] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[#00809D]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#00809D] font-bold">{i + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact - Interactive Carousel */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00809D]/10 px-6 py-3 rounded-full mb-4">
              <Lightbulb className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#00809D] font-semibold">Business Impact</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0a1f44] mb-4">How UX Design Drives Growth</h2>
            <p className="text-xl text-gray-600">Measurable results that transform businesses</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Impact Cards */}
            <div className="space-y-4">
              {businessImpact.map((impact, i) => (
                <div
                  key={i}
                  className={`
                    p-6 rounded-2xl cursor-pointer transition-all duration-300
                    ${selectedBenefit === i 
                      ? 'bg-gradient-to-r from-[#00809D]/10 to-cyan-500/10 shadow-xl scale-105' 
                      : 'bg-white shadow-lg hover:shadow-xl'
                    }
                  `}
                  onClick={() => setSelectedBenefit(i)}
                >
                  <div className="flex items-center gap-6">
                    <div className={`
                      w-14 h-14 rounded-xl flex items-center justify-center
                      ${selectedBenefit === i 
                        ? 'bg-gradient-to-br from-[#00809D] to-cyan-500' 
                        : 'bg-gray-100'
                      }
                      transition-all duration-300
                    `}>
                      <impact.icon className={`w-7 h-7 ${selectedBenefit === i ? 'text-white' : 'text-[#00809D]'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1">
                        <h3 className="text-lg font-bold text-[#0a1f44]">{impact.title}</h3>
                        <span className="text-2xl font-bold text-[#00809D]">{impact.value}</span>
                      </div>
                      <p className="text-gray-600">{impact.description}</p>
                    </div>
                    <Check className={`
                      w-6 h-6 text-[#00809D] 
                      ${selectedBenefit === i ? 'opacity-100' : 'opacity-0'}
                      transition-opacity duration-300
                    `} />
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Display */}
            <div className="relative h-96 bg-gradient-to-br from-[#00809D]/5 to-cyan-500/5 rounded-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Animated Circles */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 border-2 border-[#00809D]/20 rounded-full"
                      style={{
                        animation: `pulse ${2 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#00809D] to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                      <BarChart3 className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {businessImpact.map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-[#00809D]/30 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 20}%`,
                    animation: `float ${3 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a1f44] mb-4">Why B2 Tech Services?</h2>
            <p className="text-xl text-gray-600">Excellence in every aspect of your learning journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#00809D] to-cyan-600 p-8 rounded-3xl text-white relative overflow-hidden group">
              <div className="relative z-10">
                <Grid3x3 className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Industry-Driven Curriculum</h3>
                <p className="text-lg opacity-90 mb-6">Learn what matters in the real world. Our curriculum is crafted with input from leading design teams.</p>
                <div className="flex flex-wrap gap-3">
                  {["Figma", "Adobe XD", "Sketch", "Prototyping"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </div>

            {/* Smaller Feature Cards */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <Palette className="w-10 h-10 text-[#00809D] mb-4" />
              <h3 className="text-xl font-bold text-[#0a1f44] mb-2">Real Projects</h3>
              <p className="text-gray-600">Build a portfolio that speaks volumes</p>
            </div>

            <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <Users className="w-10 h-10 text-[#00809D] mb-4" />
              <h3 className="text-xl font-bold text-[#0a1f44] mb-2">Personalized Mentorship</h3>
              <p className="text-gray-600">1-on-1 guidance from industry experts</p>
            </div>

            <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <Clock className="w-10 h-10 text-[#00809D] mb-4" />
              <h3 className="text-xl font-bold text-[#0a1f44] mb-2">Flexible Formats</h3>
              <p className="text-gray-600">Learn at your pace, your way</p>
            </div>

            <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <Award className="w-10 h-10 text-[#00809D] mb-4" />
              <h3 className="text-xl font-bold text-[#0a1f44] mb-2">Placement Support</h3>
              <p className="text-gray-600">From learning to landing your dream job</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#0a1f44] to-[#00809D] rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands who've launched successful design careers with us
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to='/contact'>
                <button className="group px-8 py-4 bg-white text-[#00809D] font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                </Link>
                <div className="text-white">
                  <p className="text-sm opacity-80">Get in touch</p>
                  <p className="font-semibold">hrushikesh@b2techservices.in</p>
                </div>
              </div>
            </div>

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-32 h-32 border border-white rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${10 + i * 2}s linear infinite`,
                    animationDelay: `${i}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
};

export default UXTrainingPage;