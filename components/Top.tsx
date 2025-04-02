import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Top = () => {
  return (
    <div className="w-full z-[400] bg-gray-800 text-white py-2 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-4 text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-blue-400" />
          <span>finpoint@gmail.com</span>
        </div>
        <div className="hidden sm:block">|</div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-blue-400" />
          <span>+1234567890</span>
        </div>
      </div>
    </div>
  );
};

export default Top;