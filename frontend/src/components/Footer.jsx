import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-white body-font bg-gray-900">
      {/* Top Section */}
      <div className="container px-5 py-12 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Logo + tagline */}
        <div className="w-64 flex-shrink-0 mx-auto text-center md:text-left">
          <Link to="/sendotp" className="flex title-font font-medium items-center justify-center md:justify-start">
            <img
              src="./WhatsApp_Image_2025-09-28_at_22.17.54_b334b773-removebg-preview.png"
              alt="Logo"
              className="object-contain w-40 h-12"
            />
          </Link>
          <p className="mt-3 text-sm text-[#00809D] font-medium">
            B2 Tech Services — Right Job. Right Candidate. Right Now.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex-grow flex flex-wrap md:pl-40 mt-10 md:mt-0 md:text-left text-center">
          {/* Column 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <ul className="space-y-3">
              <li>
                <Link to="/recruitmentService" className="hover:text-[#00809D] transition">
                  Recruitment Service
                </Link>
              </li>
              <li>
                <Link to="/softwareTraining" className="hover:text-[#00809D] transition">
                  Software Training
                </Link>
              </li>
              <li>
                <Link to="/resumeServices" className="hover:text-[#00809D] transition">
                  Resume Services
                </Link>
              </li>
              <li>
                <Link to="/uiUxDesignThinking" className="hover:text-[#00809D] transition">
                  UI/UX Design Thinking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <ul className="space-y-3">
              <li>
                <Link to="/whatSetsUsApart" className="hover:text-[#00809D] transition">
                  What Sets Us Apart
                </Link>
              </li>
              <li>
                <Link to="/growthJourney" className="hover:text-[#00809D] transition">
                  Growth Journey
                </Link>
              </li>
              <li>
                <Link to="/foundersVision" className="hover:text-[#00809D] transition">
                  Founder's Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <ul className="space-y-3">
              <li>
                <Link to="/expertise" className="hover:text-[#00809D] transition">
                  Expertise
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00809D] transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/companyPhilosophy" className="hover:text-[#00809D] transition">
                  Company Philosophy
                </Link>
              </li>
              <li>
                <Link to="/coreValues" className="hover:text-[#00809D] transition">
                  Core Values
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-gray-300">
        <div className="container mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row sm:items-center">
          {/* Left side: Copyright + Contact */}
          <div className="sm:w-1/2 w-full mb-6 sm:mb-0">
            <p className="text-[#00B4D8] text-sm font-semibold text-center sm:text-left">
              © {new Date().getFullYear()} B2 Tech Services
            </p>

            <div className="mt-3 text-sm text-center sm:text-left leading-relaxed">
              <p className="font-semibold text-white text-base mb-1">Contact Us:</p>
              <p>B2Tech Services</p>
              <p>655, A Block, AECS Layout, Kudlu, Bangalore-560068</p>
              <p>
                <a href="tel:+916364053221" className="hover:text-[#00B4D8] transition">
                  +91-63640 53221
                </a>
              </p>
              <p>
                <a href="mailto:hr@b2techservices.in" className="hover:text-[#00B4D8] transition">
                  hr@b2techservices.in
                </a>
              </p>
            </div>
          </div>

          {/* Right side: Social Icons */}
          <span className="inline-flex sm:ml-auto justify-center sm:justify-start space-x-5">
            <a className="hover:text-[#00B4D8] transition">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="hover:text-[#00B4D8] transition">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="hover:text-[#00B4D8] transition">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="hover:text-[#00B4D8] transition">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
