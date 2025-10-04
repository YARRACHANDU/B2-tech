// src/components/B2TechExpertise.jsx
import React, { useState } from "react";
import { useTilt } from "./useTilt";
import Navbar from "../components/nav";
import { motion } from "framer-motion";
import { FaStar, FaHandshake, FaNetworkWired, FaRocket, FaBullseye } from "react-icons/fa";
import WhatsAppButton from "../components/whatsapp";
import ChatWidget from "../components/chatwidget";
import Footer from "../components/Footer";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const features = [
  { icon: "🚀", title: "Speed & Accuracy", text: "Lightning-fast hiring delivery with precision" },
  { icon: "🧠", title: "Industry Knowledge", text: "Deep expertise across multiple domains" },
  { icon: "🤝", title: "End-to-End Support", text: "Complete journey from sourcing to onboarding" },
  { icon: "💎", title: "Premium Candidates", text: "High-quality, vetted professionals ready to impact" },
  { icon: "📊", title: "Scalable Solutions", text: "Perfect for startups, SMEs, and enterprises" },
];

const domains = [
  { name: "Analytics", model: "📊", desc: "Data-driven insights & BI" },
  { name: "Automotive", model: "🚗", desc: "Connected & autonomous systems" },
  { name: "BFSI (Banking, Financial Services, Insurance)", model: "🏦", desc: "Secure financial solutions" },
  { name: "Cloud Computing", model: "☁️", desc: "Scalable cloud platforms" },
  { name: "CPG (Consumer Packaged Goods)", model: "📦", desc: "Retail & supply chain tech" },
  { name: "Cybersecurity", model: "🔒", desc: "Threat detection & protection" },
  { name: "DevOps", model: "🛠️", desc: "CI/CD & automation pipelines" },
  { name: "Drupal", model: "🌐", desc: "Content management solutions" },
  { name: "E-Commerce", model: "🛒", desc: "Online retail experiences" },
  { name: "Embedded Systems", model: "💾", desc: "Low-level hardware integration" },
  { name: "Energy & Power", model: "⚡", desc: "Smart grids & renewable energy" },
  { name: "Financial Services", model: "💹", desc: "Fintech & banking tech" },
  { name: "Hardware", model: "🔧", desc: "Physical computing devices" },
  { name: "Healthcare", model: "💉", desc: "Digital health & medical devices" },
  { name: "Industrial Automation", model: "🏭", desc: "Smart manufacturing systems" },
  { name: "Internet of Things (IoT)", model: "📡", desc: "Connected device ecosystems" },
  { name: "Java Technologies", model: "☕", desc: "Enterprise Java development" },
  { name: "Manufacturing", model: "🏭", desc: "Production line optimization" },
  { name: "Microsoft Technologies", model: "🪟", desc: "Azure & .NET solutions" },
  { name: "Mobility Solutions", model: "🚙", desc: "Transportation & logistics tech" },
  { name: "MS Dynamics CRM", model: "📇", desc: "Customer relationship management" },
  { name: "Multimedia", model: "🎥", desc: "Rich media applications" },
  { name: "Networking", model: "🌐", desc: "Enterprise network infrastructure" },
  { name: "Pharma", model: "💊", desc: "Pharmaceutical tech & research" },
  { name: "PHP Development", model: "🐘", desc: "Server-side scripting" },
  { name: "Python Development", model: "🐍", desc: "Data science & web frameworks" },
  { name: "Retail", model: "🏬", desc: "Omnichannel retail tech" },
  { name: "Risk Management", model: "⚖️", desc: "Compliance & audit solutions" },
  { name: "Salesforce CRM", model: "☁️", desc: "Cloud-based CRM platform" },
  { name: "Semiconductor Engineering", model: "💎", desc: "Chip design & fabrication" },
  { name: "Storage Solutions", model: "🗄️", desc: "Data storage technologies" },
  { name: "Software Testing & Quality Assurance", model: "✅", desc: "Test automation & QA" },
  { name: "UI/UX Design", model: "🎨", desc: "User-centered interface design" },
  { name: "VLSI Design", model: "🔬", desc: "Very-large-scale integration" },
  { name: "Wi-Fi / Bluetooth / WLAN", model: "📶", desc: "Wireless connectivity tech" },
  { name: "Wireless Technologies", model: "📡", desc: "Broad wireless communications" },
];

function DomainCard({ domain }) {
  const tiltRef = useTilt();
  return (
    <div
      ref={tiltRef}
      className="scene cursor-pointer domain-card-container"
      tabIndex={0}
      aria-label={`${domain.name} expertise card`}
    >
      <div className="card bordered-3d gap-7">
        <span className="card-border-top" />
        <span className="card-border-right" />
        <span className="card-border-bottom" />
        <span className="card-border-left" />

        <div className="card-face card-front flex flex-col items-center justify-center p-6 rounded-3xl bg-surface">
          <div className="domain-icon">{domain.model}</div>
          <h3 className="domain-title">{domain.name}</h3>
        </div>

        <div className="card-face card-back flex items-center justify-center p-6 rounded-3xl text-white">
          <div className="description-content">
            <div className="back-icon">{domain.model}</div>
            <p className="domain-description">{domain.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function B2TechExpertise() {
  const [filter, setFilter] = useState("");
  const filtered = domains.filter((d) => d.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen py-35 px-3 md:px-8 overflow-hidden pro-surface">
        {/* Header */}
        <header className="relative z-10 text-center mb-14 max-w-5xl mx-auto">
          <div className="glass-header bordered">
            <div className="brand-stripe" />
            <h1 className="heading-xl">Our Areas of Expertise</h1>
            <p className="subtext">
              B2 Tech Services specializes in recruiting and placing top-tier talent across a wide range of technology and business domains.
            </p>
          </div>
          <div className="text-center subtitle text-[27px]">
            <p>Technology & Business Domains</p>
          </div>
          <div className="header-controls">
            <input
              type="text"
              placeholder="Filter domains..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="filter-input bordered-input"
            />
          </div>
          <div className="text-center info text-[13px]">
            Click a Domain to display its Description
          </div>
        </header>

        {/* Domain Grid */}
        <section className="relative z-10 max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="empty-state">No domains match your search.</p>
          ) : (
            <div className="domain-masonry">
              {filtered.map((domain) => (
                <DomainCard key={domain.name} domain={domain} />
              ))}
            </div>
          )}
        </section>

        {/* Benefits */}
        <section className="relative z-10 mt-12 px-1">
          <div className="benefit-grid">
            {[{
              icon: "👨‍💼",
              title: "For Candidates",
              items: [
                "Tailored opportunities matching skills & aspirations",
                "Immediate access to openings suited for you now",
                "Career growth with leadership-focused partners"
              ],
              color: "blue"
            }, {
              icon: "🏢",
              title: "For Employers",
              items: [
                "Access to India's elite, rigorously vetted talent",
                "Speed and precision in hiring proven to save time",
                "Scalable solutions for teams or individual roles"
              ],
              color: "pink"
            }].map((panel, idx) => (
              <motion.div
                key={panel.title}
                whileHover={{ y: -8 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className={`benefit bordered-panel two-tone ${panel.color === 'pink' ? 'alt' : ''}`}
              >
                <div className="panel-head">
                  <div className="panel-icon">{panel.icon}</div>
                  <h3 className="panel-title text-blue">{panel.title}</h3>
                </div>
                <div className="panel-list">
                  {panel.items.map((text, i) => (
                    <motion.div key={text} initial={{ opacity: 0, x: panel.color === 'pink' ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="panel-item bordered-soft">
                      <span className="pi">•</span>
                      <p>{text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>


      {/* Footer carousel and CTA */}
      <footer className="relative z-10 mt-6">
        <div className="footer-wrap">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="footer-head">
            <h2 className="footer-title">
              <span className="t-icon">🎯</span> Why Partner with <span className="brand-grad">B2 Tech Services?</span>
            </h2>
          </motion.div>


          <div className="marquee-viewport">
            <motion.div
              className="marquee-track"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 12, ease: "linear" } }}
            >
              {[...features, ...features].map(({ icon, title, text }, index) => (
                <div key={index} className="feature-chip bordered-chip-strong">
                  <div className="chip-icon">{icon}</div>
                  <h4 className="chip-title">{title}</h4>
                  <p className="chip-text">{text}</p>
                </div>
              ))}
            </motion.div>
          </div>


          <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="cta bordered-cta">
            <p className="cta-text">Ready to discuss your exact domain hiring requirements?</p>
            <motion.a href="/contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="cta-btn">
              <span>📧</span> Contact Me
            </motion.a>
          </motion.div>


          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="footnote">
            © {new Date().getFullYear()} B2 Tech Services. All rights reserved.
          </motion.div>
        </div>
      </footer>
      
      <ChatWidget />
      <WhatsAppButton />
    </div>
    <Footer />


      {/* Styles */}
      <style jsx="true">{`
        /* ---------- Theme surfaces ---------- */
        .pro-surface { background: var(--bg); }
        :root {
          --bg: #f7f8fb;
          --surface: #ffffff;
          --surface-2: #fafbff;
          --ink: #131722;
          --muted: #6b7280;
          --brand: #4f46e5;
          --brand-2: #7c3aed;
          --brand-deep: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          --ring: rgba(79,70,229,.15);
          --border: rgba(17,24,39,.08);
          --border-strong: rgba(17,24,39,.16);
          --soft: rgba(79,70,229,.08);
          --amber: linear-gradient(90deg, #f7b733, #fc4a1a);
          --gold: #eab308; --teal:#14b8a6; --indigo:#6366f1; --violet:#8b5cf6; --rose:#f43f5e;
        }
        .dark :root, .dark {
          --bg: #0b1020;
          --surface: #0f1528;
          --surface-2: #0d1324;
          --ink: #eef2ff;
          --muted: #9aa4c5;
          --brand: #7c8cff;
          --brand-2: #c084fc;
          --ring: rgba(124,140,255,.18);
          --border: rgba(255,255,255,.08);
          --border-strong: rgba(255,255,255,.18);
          --soft: rgba(124,140,255,.12);
        }


        .bg-surface { background: var(--surface); }
        .bg-brand-deep { background: var(--brand-deep); }


        /* ---------- Background Accents ---------- */
        .accent-grid {
          position: absolute; inset: -10% -10% auto -10%; height: 380px; z-index: 0;
          background:
            radial-gradient(1200px 300px at 20% 20%, var(--ring), transparent 60%),
            radial-gradient(800px 240px at 80% 40%, var(--ring), transparent 60%);
          mask-image: linear-gradient(to bottom, black, black 75%, transparent);
        }
        


        /* ---------- Header ---------- */
        .glass-header {
          position: relative; padding: 28px 22px 26px; border-bottom-left-radius: 22px; border-bottom-right-radius: 22px;
          background: linear-gradient(180deg, rgba(255,255,255,.6), rgba(255,255,255,.35));
          backdrop-filter: blur(8px);
        }
        .dark .glass-header { background: linear-gradient(180deg, rgba(18,24,40,.6), rgba(18,24,40,.35)); }
        .bordered { outline: 1px solid var(--border); box-shadow: 0 1px 0 rgba(255,255,255,.6) inset, 0 10px 30px rgba(0,0,0,.05); }
        .heading-xl {
          font-weight: 900; font-size: clamp(28px, 4vw, 54px);
          color:#0a1f44;
        }
        .brand-stripe { position:absolute; top:0; left:0; right:0; height:6px; background: linear-gradient(90deg, #00809D,#00809D); border-top-left-radius:22px; border-top-right-radius:22px;color:#00809D; }
        .subtext { margin-top: 12px; color: #00809D; font-size: 16px; line-height: 1.7; }
        .header-controls { display:flex; gap:10px; justify-content:center; margin-top:16px; flex-wrap:wrap; }
        .filter-input {
          width: min(560px, 92vw); padding: 12px 16px; border-radius: 14px; background: var(--surface);
          color: #00809D; outline: none; border: 1px solid var(--border); box-shadow: 0 2px 0 rgba(0,0,0,.02) inset;
        }
        .bordered-input:focus { border-color: var(--brand); box-shadow: 0 0 0 4px var(--soft); }
        .toggle { padding: 10px 14px; border-radius: 12px; background: var(--surface); }
        .bordered-chip { border: 1px solid var(--border); color: var(--ink); }
        
        .subtitle{
          padding-top:30px;
          color:#0a1f44;
          font-weight:700;
        }

        .info{
          padding-top:20px;
          color:#00809D;
          font-weight:500;
        }

        /* ---------- Domain Masonry Grid ---------- */
        .domain-masonry {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 16px;
        }
        


        /* ---------- Card Flip + Borders ---------- */
        .scene { perspective: 1200px; }
        .card {
          width: 100%; height: 15.5rem; position: relative; transform-style: preserve-3d; transition: transform .7s cubic-bezier(.2,.8,.2,1);
          border-radius: 20px;
        }
        .scene:hover .card, .scene:focus .card { transform: rotateY(180deg) translateZ(0) scale(1.03); }
        .card-face {
          position:absolute; inset:0; backface-visibility: hidden; border-radius: 20px; overflow: hidden;
        }


        /* Premium bordered look */
        .bordered-3d {
          background: var(--surface);
          border: 1px solid var(--border);
          box-shadow:
            0 1px 0 rgba(255,255,255,.6) inset,
            0 12px 30px rgba(16,24,40,.06),
            0 0 0 6px rgba(16,24,40,.02);
        }
        .card-border-top, .card-border-right, .card-border-bottom, .card-border-left {
          content: ""; position: absolute; background: linear-gradient(90deg, var(--brand), var(--brand-2));
          opacity: .12;
        }
        .card-border-top { top:0; left:12px; right:12px; height:2px; border-radius: 999px; }
        .card-border-bottom { bottom:0; left:12px; right:12px; height:2px; border-radius: 999px; }
        .card-border-left { top:12px; bottom:12px; left:0; width:2px; border-radius: 999px; }
        .card-border-right { top:12px; bottom:12px; right:0; width:2px; border-radius: 999px; }


        /* ---------- Domain Card Styles ---------- */
        .domain-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(99,102,241,.15), rgba(124,58,237,.15));
          border: 2px solid var(--border);
          box-shadow: 
            0 8px 32px rgba(79,70,229,.1),
            0 0 0 1px rgba(255,255,255,.5) inset;
          font-size: 42px;
          margin-bottom: 16px;
          transition: transform 0.3s ease;
        }
        
        .domain-masonry {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 520px) {
  .domain-masonry { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 780px) {
  .domain-masonry { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 1020px) {
  .domain-masonry { grid-template-columns: repeat(4, 1fr); }
}
@media (min-width: 1340px) {
  .domain-masonry { grid-template-columns: repeat(5, 1fr); }
}
.domain-card-container {
  grid-column: span 1;
}



        .domain-title {
          font-weight: 800;
          color: var(--ink);
          text-align: center;
          font-size: 16px;
          line-height: 1.3;
          padding: 0 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          max-height: 2.6em;
        }


        .description-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }


        .back-icon {
          font-size: 32px;
          opacity: 0.9;
          margin-bottom: 8px;
        }


        .domain-description {
          font-size: 15px;
          line-height: 1.5;
          opacity: 0.95;
          text-align: center;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }


        /* Card hover effects */
        .scene:hover .domain-icon,
        .scene:focus .domain-icon {
          transform: scale(1.1);
        }


        .card-back {
          transform: rotateY(180deg);
          background-color:#00809D;
        }


        .empty-state {
          text-align: center;
          color: #00809D;
          grid-column: 1 / -1;
          padding: 2rem;
          font-size: 18px;
        }


        /* ---------- Why Choose ---------- */
        .cap-heading { display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom: 10px; flex-wrap: wrap; }
        .cap { padding: 10px 16px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface); color: #0a1f44; font-weight: 700; }
        .cap-strong { padding: 10px 18px; border-radius: 999px; border: 1px solid var(--border-strong); background: linear-gradient(180deg, var(--surface), var(--surface-2)); font-weight: 800; color: #0a1f44; }
        .cap-sub { text-align:center; font-size: clamp(18px, 2.2vw, 24px); color: #00809D; margin-top: 10px; }
        .grad-amber { font-weight: 800;background: var(--amber); -webkit-background-clip: text; color: #00809D; }
        .strong { font-weight: 800; color: #00809D; }


        /* ---------- Benefits Panels ---------- */
        .benefit-grid { display:grid; gap: 24px; grid-template-columns: 1fr; max-width: 1180px; margin: 0 auto; }
        @media (min-width: 1024px) { .benefit-grid { grid-template-columns: 1fr 1fr; } }
        .bordered-panel {
          position:relative; border-radius: 22px; background: var(--surface); border: 1px solid var(--border);
          box-shadow: 0 12px 30px rgba(16,24,40,.06);
        }
        .two-tone::before, .two-tone::after {
          content:""; position:absolute; inset:0; border-radius:22px; pointer-events:none;
        }
        .two-tone::before { border: 1px solid var(--border-strong); opacity:.6; }
        .two-tone::after {
          inset: -1px; border-radius: 24px;
          background: linear-gradient(135deg, rgba(79,70,229,.10), rgba(124,58,237,.06));
          mask: linear-gradient(white, white) content-box, linear-gradient(white, white);
          -webkit-mask-composite: xor; mask-composite: exclude; padding: 1px;
        }
        .panel-head { display:flex; align-items:center; gap:12px; padding: 22px 22px 6px; position:relative; }
        .panel-icon { width:56px; height:56px; border-radius: 14px; background: linear-gradient(135deg, rgba(99,102,241,.18), rgba(124,58,237,.18)); display:flex; align-items:center; justify-content:center; font-size: 28px; border: 1px solid var(--border); }
        .panel-title { font-size: 22px; font-weight: 900; color:#0a1f44; }
        
        .ribbon { position:absolute; top:14px; right:14px; width:10px; height:28px; border-radius: 6px; }
        .ribbon-blue { background: linear-gradient(180deg, #60a5fa, #22d3ee); }
        .ribbon-pink { background: linear-gradient(180deg, #f472b6, #a78bfa); }
        .panel-list { padding: 10px 18px 22px; display:grid; gap:12px; }
        .panel-item {
          display:flex; gap:12px; align-items:flex-start; padding: 12px 14px; border-radius: 14px; background: linear-gradient(180deg, var(--surface), var(--surface-2));
        }
        .bordered-soft { border: 1px solid var(--border); }
        .pi { font-size: 20px; margin-top: 2px; }


        /* ---------- Differentiators ---------- */
        .sec-head { text-align:center; margin-bottom: 20px; }
        .sec-title {
          font-weight: 900; font-size: clamp(28px, 4vw, 44px);
          background: linear-gradient(90deg, var(--brand), var(--brand)); -webkit-background-clip: text; color: #0a1f44;
        }
        .sec-underline { width: 120px; height: 4px; background: linear-gradient(90deg, var(--brand), var(--brand-2)); border-radius: 999px; margin: 10px auto 0; }
        .diff-grid { display:grid; gap: 16px; grid-template-columns: repeat(1, 1fr); max-width: 1180px; margin: 24px auto 0; }
        @media (min-width: 720px) { .diff-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1200px) { .diff-grid { grid-template-columns: repeat(5, 1fr); } }
        .bordered-tile {
          border: 1px solid var(--border); border-radius: 18px; background: var(--surface);
          box-shadow: 0 10px 26px rgba(16,24,40,.06); padding: 18px; display:flex; flex-direction:column; gap: 10px; height: 100%;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .hue-gold .medal { background: radial-gradient(circle at 30% 30%, rgba(234,179,8,.25), transparent 60%); color: #eab308; }
        .hue-teal .medal { background: radial-gradient(circle at 30% 30%, rgba(20,184,166,.25), transparent 60%); color: #14b8a6; }
        .hue-indigo .medal { background: radial-gradient(circle at 30% 30%, rgba(99,102,241,.25), transparent 60%); color: #6366f1; }
        .hue-violet .medal { background: radial-gradient(circle at 30% 30%, rgba(139,92,246,.25), transparent 60%); color: #8b5cf6; }
        .hue-rose .medal { background: radial-gradient(circle at 30% 30%, rgba(244,63,94,.25), transparent 60%); color: #f43f5e; }
        .tile-top { display:flex; align-items:center; gap:10px; }
        .medal { width: 48px; height: 48px; border-radius: 12px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border); font-size: 22px; }
        .tile-title { font-weight: 800; color: #00809D; font-size: 16px; }
        .tile-desc { color: var(--muted); font-size: 14px; line-height: 1.5; }


        /* ---------- Metrics ---------- */
        .metrics-title { text-align:center; font-weight: 800; color: #0a1f44; font-size: clamp(26px, 3.6vw, 40px); }
        .metrics-divider { width: 80px; height: 4px; background: linear-gradient(90deg, #22d3ee, #8b5cf6); border-radius: 999px; margin: 12px auto 24px; transform-origin:left; }
        .metric-card {
          max-width: 680px; margin: 0 auto; text-align:center; background: var(--surface);
          padding: 30px 28px; border-radius: 18px; border: 1px solid var(--border);
          box-shadow: 0 12px 30px rgba(16,24,40,.06);
        }
        .bordered-split { position: relative; }
        .bordered-split::after {
          content:""; position:absolute; inset: -1px; border-radius: 20px;
          background: linear-gradient(90deg, rgba(34,211,238,.24), rgba(139,92,246,.24));
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude; padding: 1px; pointer-events:none;
        }
        .metric-value {
          font-size: clamp(48px, 7vw, 80px);
          font-weight: 900; background: linear-gradient(90deg, #22d3ee, #8b5cf6);
          -webkit-background-clip: text; color: transparent; line-height: 1;
        }
        .metric-label { margin-top: 6px; font-weight: 700; color: var(--ink); }
        .metric-note { margin-top: 8px; color: #00809D; max-width: 520px; margin-left: auto; margin-right: auto; }
        .metric-foot { text-align:center; font-size: 18px; color: var(--muted); margin-top: 18px; }


        /* ---------- Footer ---------- */
        .footer-wrap { position: relative; overflow: hidden; border-radius: 22px; background:#00809D; padding: 48px 18px; }
        .footer-head { text-align:center; margin-bottom: 16px; }
        .footer-title { font-weight: 900; font-size: clamp(26px, 3.6vw, 42px); color: #0a1f44; }
        .brand-grad { background: linear-gradient(90deg, #a78bfa, #f0abfc); -webkit-background-clip: text; color: transparent; }
        .t-icon { margin-right: 8px; }
        .marquee-viewport { overflow: hidden; padding: 18px 0; }
        .marquee-track { display:flex; gap: 14px; width: max-content; }
        .feature-chip {
          min-width: 280px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.22);
          border-radius: 16px; padding: 16px; color: white; text-align:center;
        }
        .bordered-chip-strong { box-shadow: 0 10px 24px rgba(0,0,0,.2), 0 0 0 1px rgba(255,255,255,.12) inset; }
        .chip-icon { font-size: 28px; margin-bottom: 6px; }
        .chip-title { font-weight: 800; margin-bottom: 4px; }
        .chip-text { opacity: .9; font-size: 14px; }
        .cta {
          text-align:center; max-width: 720px; margin: 18px auto 0; padding: 22px; border-radius: 18px;
          background: linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.08));
          border: 1px solid rgba(255,255,255,.32);
          box-shadow: 0 10px 24px rgba(0,0,0,.25);
        }
        .bordered-cta::after {
          content:""; position:absolute; inset: 10px; border-radius: 14px; border: 1px dashed rgba(255,255,255,.32); pointer-events:none;
        }
        .cta-text { color: white; font-weight: 600; margin-bottom: 12px; }
        .cta-btn {
          display:inline-flex; gap: 8px; align-items:center; font-weight: 900;
          background: white; color: #00809D; padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(0,0,0,.06);
        }
        .footnote { text-align:center; margin-top: 16px; color: #c7d2fe; font-size: 13px; }


        /* ---------- Anim helpers ---------- */
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite 2s; }
        @keyframes float { 0% { transform: translateY(0) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
        @keyframes float-delayed { 0% { transform: translateY(0) } 50% { transform: translateY(-10px) } 100% { transform: translateY(0) } }
        #theme{
          top:50px;
          right:50px;
        }
      `}</style>
    </div>
  );
}
