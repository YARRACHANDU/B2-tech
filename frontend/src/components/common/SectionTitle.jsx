import React from "react";

const SectionTitle = ({ title, subtitle, center = true }) => {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-12`}>
      <h2 className="text-4xl font-bold text-[#0a1f44]">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div
        className={`mt-4 w-16 h-1 bg-[#00809D] ${
          center ? "mx-auto" : "ml-0"
        } rounded-full`}
      />
    </div>
  );
};

export default SectionTitle;
