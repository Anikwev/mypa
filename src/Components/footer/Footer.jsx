import React from 'react'
import { FaAppStoreIos, FaGooglePlay  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FooterItems } from './FooterItems';

export const Footer = () => {
  return (
    <section className="bg-[#C8F0E2] pt-[100px] pb-[28px] relative overflow-hidden">
          {/* =========== footer part ========= */}
    <div className="container">
      <div className="flex flex-col lg:flex-row mb-[50px] space-y-6 md:space-y-0 gap-5">
        <div className="md:w-[300px] flex flex-col gap-5 justify-center items-center w-full">
          <div className="flex flex-row items-start gap-[20px] sm:gap-[50px] mb-5">
            <Link
              to="#"
              className="flex items-center gap-[3px] bg-[#FCECBE] rounded-[5px] p-2 "
            >
              <div className="text-[36px] text-blue-500">
                <FaAppStoreIos />
              </div>
              <div>
                <h3 className="text-[16px] font-roboto font-bold">IOS APP</h3>
                <p className="text-[14px] font-roboto font-normal text-[#707070]">Download</p>
              </div>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-[3px] bg-[#FCECBE] rounded-[5px] p-2"
            >
              <div className="text-[36px] text-sky-400">
                <FaGooglePlay />
              </div>
              <div>
                <h3 className="text-[16px] font-roboto font-bold">Android</h3>
                <p className="text-[14px] font-roboto font-normal text-[#707070]">Download</p>
              </div>
            </Link>
          </div>
          <p className="text-[16px] text-center lg:text-left w-[250px] md:w-[300px] font-roboto font-normal text-[#707070] mt-5">
            E-commerce and Classified marketplace in the world, Real Estate, Restaurant, Grocery, Pharmacy,
            Car Deals, Post Man and Ads.
          </p>
        </div>
         <div className="flex justify-center mx-auto flex-col md:flex-row items-start gap-10 lg:gap-y-16">
         <div className="md:w-1/4 w-full">
          <FooterItems heading="More from mypa" one="Sell Fast" two="Staffing solutions" three="Ad Promotions" four="Membership" />
        </div>
        <div className="md:w-1/4 w-full">
          <FooterItems heading="Help & Support" one="Contact Us" two="Stay safe" three="FAQ" four="Support Ticket" />
        </div>
        <div className="md:w-1/4 w-full">
          <FooterItems heading="About mypa" one="About Us" two="Careers" three="Terms and Conditions" four="Privacy policy" />
        </div>
         </div>
      </div>
  
      {/* ============ icon part =========== */}
      <div className="w-full px-10 py-4 bg-white flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="text-[29px]">
          <img src="/images/Logo.svg" alt="logo" />
        </div>
        <div className="flex items-center gap-[15px] sm:gap-[30px]">
          <Link to="#"><img src="/images/instagram.png" alt="Instagram" className="w-6 h-6" /></Link>
          <Link to="#"><img src="/images/twitter.png" alt="Twitter" className="w-6 h-6" /></Link>
          <Link to="#"><img src="/images/linkedin.png" alt="LinkedIn" className="w-6 h-6" /></Link>
          <Link to="#"><img src="/images/facebook.png" alt="Facebook" className="w-6 h-6" /></Link>
          <Link to="#"><img src="/images/youtube.png" alt="YouTube" className="w-6 h-6" /></Link>
        </div>
  
        <div className="flex flex-wrap justify-center items-center w-[250px] md:w-[450px] gap-5">
          <Link to="#"><img className="w-full" src="/images/paypal.png" alt="PayPal" /></Link>
          <Link to="#"><img className="w-full" src="/images/visa.png" alt="Visa" /></Link>
          <Link to="#"><img className="w-full" src="/images/credit-card.png" alt="Credit Card" /></Link>
          <Link to="#"><img className="w-full" src="/images/Paystack_Logo.png" alt="Paystack" /></Link>
          <Link to="#"><img className="w-full" src="/images/Remita-Logo.png" alt="Remita" /></Link>
        </div>
      </div>
  
      {/* ======= copyright part ===== */}
      <div className="mt-6 text-[16px] font-normal font-roboto text-[#707070] text-center">
        Copyright © Winstar IT & Technologies
      </div>
    </div>
  </section>
  
  )
}
