import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaLanguage } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { FaAppStoreIos } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { MdPersonAddAlt1 } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { BsUiChecksGrid } from "react-icons/bs";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
          <nav>
      {/* ========== top nav part ============== */}
      <div className="py-[15px] bg-white border-b-[.5px] border-b-[#C8F0E2]">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <img src="images/usa.png" alt="icon" />
              <h4>USA</h4>
              <IoIosArrowForward />
            </div>
            <div className="flex gap-1 items-center">
              <div className="text-yellow-500"><FaLanguage /></div>
              <h4>English</h4>
              <IoIosArrowForward />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-[30px]">
            <Link to="#" className="flex items-center gap-1">
              <div className="text-yellow-500"><IoLogoAndroid /></div>
              <h4>Android App</h4>
            </Link>
            <Link to="#" className="flex items-center gap-1">
              <div className="text-yellow-500"><FaAppStoreIos /></div>
              <h4>iOS App</h4>
            </Link>
            <Link to="/login" className="flex items-center gap-1">
              <div className="text-yellow-500"><FaArrowRightToBracket /></div>
              <h4>Login</h4>
            </Link>
            <Link to="#" className="flex items-center gap-1">
              <div className="text-yellow-500"><MdPersonAddAlt1 /></div>
              <h4>Vendor Register</h4>
            </Link>
          </div>
        </div>
      </div>

      {/* ======= main nav part ======== */}
      <div className="py-[25px] bg-white">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <img src="images/Logo.svg" alt="logo" />
          </div>
          
          {/* Mobile Menu Button */}
          <button className="block lg:hidden" onClick={toggleMenu}>
            <BsUiChecksGrid className='text-3xl text-[#00CB84] ' />
          </button>

          {/* Main Navigation for larger screens */}
          <div className="hidden lg:flex items-center gap-[40px]">
            <ul className="flex items-center gap-[40px]">
              <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[18px] font-roboto leading-4 font-normal text-[#00CB84]" : "text-[18px] font-roboto leading-4 font-normal text-[#000001]"}>Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[18px] font-roboto leading-4 font-normal text-[#00CB84]" : "text-[18px] font-roboto leading-4 font-normal text-[#000001]"}>About</NavLink></li>
              <li><NavLink to="/service" className={({ isActive }) => isActive ? "text-[18px] font-roboto leading-4 font-normal text-[#00CB84]" : "text-[18px] font-roboto leading-4 font-normal text-[#000001]"}>Services</NavLink></li>
              <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-[18px] font-roboto leading-4 font-normal text-[#00CB84]" : "text-[18px] font-roboto leading-4 font-normal text-[#000001]"}>Property</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[18px] font-roboto leading-4 font-normal text-[#00CB84]" : "text-[18px] font-roboto leading-4 font-normal text-[#000001]"}>Contact</NavLink></li>
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-[30px]">
            {/* <div className="w-[40px] h-[40px] bg-[#C8F0E2] rounded-[5px] flex justify-center items-center">
              <img src="images/Massage.png" alt="icon" />
            </div> */}
            <Link to="#" className="px-5 py-3 bg-[#00CB84] rounded-lg text-[18px] font-roboto font-normal text-white">Post Free Ads</Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Show if isMenuOpen is true */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white">
          <ul className="flex flex-col items-start gap-4 p-4">
            <li><NavLink to="/" className="text-[18px] font-roboto font-normal text-[#000001]" onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to="/about" className="text-[18px] font-roboto font-normal text-[#000001]" onClick={toggleMenu}>About</NavLink></li>
            <li><NavLink to="/service" className="text-[18px] font-roboto font-normal text-[#000001]" onClick={toggleMenu}>Services</NavLink></li>
            <li><NavLink to="/blog" className="text-[18px] font-roboto font-normal text-[#000001]" onClick={toggleMenu}>Property</NavLink></li>
            <li><NavLink to="/contact" className="text-[18px] font-roboto font-normal text-[#000001]" onClick={toggleMenu}>Contact</NavLink></li>
            <li><NavLink to="/login" className="text-[18px] font-roboto font-normal text-[#000001]" onClick={toggleMenu}>Login</NavLink></li>
            <li><NavLink to="/registration" className="text-[18px] font-roboto font-normal text-[#000001]" onClick={toggleMenu}>Vendor Register</NavLink></li>
          </ul>
        </div>
      )}
    </nav>

    </>
  )
}
