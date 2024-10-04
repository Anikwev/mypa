import React, { useState } from 'react';
import { IoIosArrowForward, IoMdMenu, IoMdClose } from 'react-icons/io';
import { FaLanguage, FaAppStoreIos } from 'react-icons/fa6';
import { IoLogoAndroid } from 'react-icons/io';
import { BsUiChecksGrid } from "react-icons/bs";

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const NavbarTwo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const userSlice = useSelector((state)=>state.counter.value)

  return (
    <nav className="bg-white">
      {/* ========== Top Nav Part ============== */}
      <div className="py-4 bg-white border-b border-[#C8F0E2]">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Left Side: Country and Language */}
          <div className="flex items-center gap-5">
            {/* Country Selector */}
            <div className="flex items-center gap-1">
              <img src="/images/usa.png" alt="USA Flag" className="w-5 h-5" />
              <span className="text-sm">USA</span>
              <IoIosArrowForward className="text-gray-600" />
            </div>
            {/* Language Selector */}
            <div className="flex items-center gap-1">
              <FaLanguage className="text-yellow-500" />
              <span className="text-sm">English</span>
              <IoIosArrowForward className="text-gray-600" />
            </div>
          </div>

          {/* Right Side: App Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="#"
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#00CB84] transition-colors duration-300"
            >
              <IoLogoAndroid className="text-yellow-500" />
              <span>Android App</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#00CB84] transition-colors duration-300"
            >
              <FaAppStoreIos className="text-yellow-500" />
              <span>iOS App</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl text-gray-700"
            >
              {isMobileMenuOpen ? <IoMdClose /> : <BsUiChecksGrid color='#00CB84' />}
            </button>
          </div>
        </div>
      </div>

      {/* ======= Main Nav Part ======== */}
      <div className="py-[25px] bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="logo">
              <img src="/images/Logo.svg" alt="logo" />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-8">
              <Link
                to="/layoutTwo/home"
                className="text-[18px] font-roboto leading-4 font-normal text-[#000001] hover:text-[#00CB84] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/layoutTwo/about"
                className="text-[18px] font-roboto leading-4 font-normal text-[#000001] hover:text-[#00CB84] transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="/layoutTwo/service"
                className="text-[18px] font-roboto leading-4 font-normal text-[#000001] hover:text-[#00CB84] transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                to="/layoutTwo/blog"
                className="text-[18px] font-roboto leading-4 font-normal text-[#000001] hover:text-[#00CB84] transition-colors duration-300"
              >
                Property
              </Link>
              <Link
                to="/layoutTwo/contact"
                className="text-[18px] font-roboto leading-4 font-normal text-[#000001] hover:text-[#00CB84] transition-colors duration-300">Contact</Link>
            </div>
            <div className="div">
            <Link
                to="/layoutTwo/profilePage"
                className="text-[18px] flex flex-col items-center justify-center font-roboto leading-4 font-normal text-[#000001] hover:text-[#00CB84] transition-colors duration-300">
                  <div className="w-[30px] h-[30px] mb-1 ">
                    <img className='w-full h-full rounded-full' src={userSlice.photoURL} alt="" />
                  </div>
                    {/* <p className=' hidden lg:block'>{userSlice.displayName} </p> */}
              </Link>
            </div>

            {/* Mobile Navigation Links */}
            {isMobileMenuOpen && (
              <div className="md:hidden absolute top-[100px] left-0 w-full bg-white shadow-md z-50">
                <div className="flex flex-col items-start gap-5 p-5">
                  <Link
                    to="/layoutTwo/home"
                    className="text-[18px] font-roboto leading-4 font-normal text-[#000001] hover:text-[#00CB84] transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/layoutTwo/about"
                    className="text-[18px] font-roboto leading-4 font-normal text-[#000001] hover:text-[#00CB84] transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/layoutTwo/service"
                    className="text-[18px] font-roboto leading-4 font-normal text-[#000001] hover:text-[#00CB84] transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    to="/layoutTwo/blog"
                    className="text-[18px] font-roboto leading-4 font-normal text-[#000001] hover:text-[#00CB84] transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Property
                  </Link>
                  <Link
                    to="/layoutTwo/contact"
                    className="text-[18px] font-roboto leading-4 font-normal text-[#000001] hover:text-[#00CB84] transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                   to="/layoutTwo/profilePage"
                   className="text-[18px] flex flex-col items-center justify-center font-roboto leading-4 font-normal text-[#000001] hover:text-[#00CB84] transition-colors duration-300">
                  <div className="w-[30px] h-[30px] mb-1 ">
                    <img className='w-full h-full rounded-full' src={userSlice.photoURL} alt="img" />
                  </div>
                    {/* <p>{userSlice.displayName} </p> */}
              </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
