import React from "react";

const CardWrapper = ({ children, className }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 transition hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
