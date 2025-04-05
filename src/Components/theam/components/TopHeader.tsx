"use client";

import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoCall, IoLocationOutline } from "react-icons/io5";

export default function TopHeader() {
  return (
    <div className="bg-[#0A2B58] text-white text-sm py-2 px-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center flex-wrap gap-2">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-xs">
            <IoLocationOutline className="text-sm" /> 101 E 129th St, East
            Chicago, IN 46312, US
          </span>
          <span className="flex items-center gap-1 text-xs">
            <CgMail className="text-sm" /> info@example.com
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <span className="text-xs flex items-center gap-1">
            <IoCall className="text-sm" /> +1 234 567 890
          </span>
          <span className="w-[1px] bg-white/50 h-5 inline-block"></span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-gray-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
