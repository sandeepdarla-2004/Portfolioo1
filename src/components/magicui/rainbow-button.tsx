import React from "react";

export const RainbowButton: React.FC<React.PropsWithChildren> = ({ children }) => (
  <button
    className="relative px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 shadow-lg transition-all duration-300 hover:from-pink-600 hover:via-yellow-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-pink-200"
    style={{ backgroundSize: '200% 200%', backgroundPosition: 'left center' }}
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 rounded-full opacity-30 animate-gradient bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500"></span>
  </button>
);
