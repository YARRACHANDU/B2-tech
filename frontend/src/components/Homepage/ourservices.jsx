import React from 'react';
import {Link} from 'react-router-dom'

function Ourservices() {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1f44]">Our Services</h2>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        We provide end-to-end recruitment solutions and talent development programs to help organizations and professionals grow.
      </p>
    </div>

    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

      {/* Recruitment Solutions */}
      <div className="w-full">
        <h2 className="text-xl font-semibold flex items-center" style={{'marginTop':'-60px'}}>
          🔹 Recruitment Solutions
        </h2>
      </div>

      {[
        "Permanent Staffing",
        "Contract Staffing",
        "Executive & Leadership Hiring",
        "Lateral Hiring",
        "Project-Based Hiring",
        "Hands-On Recruitment & Headhunting"
      ].map((item) => (
        <div key={item} className="p-2 sm:w-1/2 w-full" >
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              className="text-[#00809D] w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="title-font font-medium">{item}</span>
          </div>
        </div>
      ))}

      {/* Talent Development & Training */}
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          🔹 Talent Development & Training
        </h2>
      </div>

      {[
        "Technical Training Programs (AI/Gen AI, Data Science, Cloud, Salesforce, Embedded Systems, UI/UX & more)",
        "Resume Preparation & Career Branding"
      ].map((item) => (
        <div key={item} className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              className="text-[#00809D] w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="title-font font-medium">{item}</span>
          </div>
        </div>
      ))}
    </div>

<button className="flex items-center mx-auto mt-16 text-white bg-[#00809D] border-0 py-2 px-8 focus:outline-none hover:bg-[#0a1f44] rounded-full text-lg">
  <Link to='/contact'>📞 Contact Us</Link>
</button>



  </div>
</section>

    </div>
  )
}

export default Ourservices