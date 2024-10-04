import React, { useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi'; // Changed the icon to double arrow
import { MdDoubleArrow } from "react-icons/md";

const PricingPlan = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Prices based on billing cycle
  const prices = {
    monthly: {
      starter: 25.90,
      standard: 50.90,
      premium: 98.50,
    },
    yearly: {
      starter: 259.00,
      standard: 509.00,
      premium: 985.00,
    },
  };

  // Toggle billing cycle between monthly and yearly
  const handleBillingCycleToggle = () => {
    setBillingCycle((prevCycle) => (prevCycle === 'monthly' ? 'yearly' : 'monthly'));
  };

  return (
    <div className="container py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <div className="flex items-center justify-center">
            <img className='w-9 h-9' src="/images/placeholder.png" alt="icon" />
            <h2 className="md:text-3xl text-xl font-bold font-roboto mb-4 inline-block">Our Pricing Plan</h2>
        </div>
        <div className="flex items-center justify-center mb-5 gap-2">
            <div className="w-[60px] h-1 bg-[#F6B400] rounded-lg "></div>
            <div className="w-[20px] h-1 bg-[#F6B400] rounded-lg "></div>
            <div className="w-[8px] h-1 bg-[#F6B400] rounded-lg "></div>
         </div>
        <p className="text-gray-500 md:text-[20px] text-[15px] font-roboto mb-6 md:w-[690px] mx-auto ">
          Ecommerce and Classified marketplace in the world, RealEstate, Restaurant, Grocery, Pharmacy, Car Deals, Post Man and Ads.
        </p>
        {/* Toggle Switch for Billing Cycle */}
        <div className="flex justify-center items-center gap-4 bg-[#FCECBE] md:w-[300px] p-[15px] rounded-lg text-center mx-auto ">
          <span className="text-black font-bold">Monthly</span>
          <div onClick={handleBillingCycleToggle} className={`relative w-14 h-8 bg-yellow-400 rounded-full cursor-pointer transition`}>
            <div className={`absolute w-6 h-6 bg-white rounded-full shadow-md top-1 transition-transform ${ billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'}`} ></div>
          </div>
          <span className="text-black font-bold">Yearly</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-10">
        {/* Starter Plan Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-[#FCECBE] transition duration-300">
        <div className="flex justify-between items-center mb-5">
          <div className="bg-[#ECFBF6] px-[22px] py-2 rounded-lg ">
            <h3 className="text-2xl font-bold text-left">${prices[billingCycle].standard} </h3>
            <h4>{billingCycle === 'monthly' ? 'Per Month' : 'Per Year'}</h4>
          </div>
          <p className="text-black font-medium mb-6 text-left">Starter Plan</p>
          </div>
          <ul className="text-black space-y-2 mb-6 text-left text-[16px] font-roboto ">
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />10 Regular Ads</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />05 Featured Ads</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />05 Top Ads</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />05 Bumped up</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />24/7 Hours Support</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />Direct Message Option from Client</li>
          </ul>
          <button className="bg-yellow-400 text-white py-2 w-full rounded-md hover:bg-yellow-500 transition">Take the Plan</button>
        </div>

        {/* Standard Plan Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-[#FCECBE] transition duration-300">
          <div className="flex justify-between items-center mb-5">
          <div className="bg-[#ECFBF6] px-[22px] py-2 rounded-lg ">
            <h3 className="text-2xl font-bold text-left">${prices[billingCycle].standard} </h3>
            <h4>{billingCycle === 'monthly' ? 'Per Month' : 'Per Year'}</h4>
          </div>
          <p className="text-black font-medium mb-6 text-left">Standard Plan</p>
          </div>
          <ul className="text-black space-y-2 mb-6 text-left font-roboto text-[16px]">
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />100 Regular Ads</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />20 Featured Ads</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />10 Top Ads</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />05 Bumped up</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />24/7 Hours Support</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />Direct Message Option from Client</li>
          </ul>
          <button className="bg-yellow-400 text-white py-2 w-full rounded-md hover:bg-[#F6B400] transition">Take the Plan</button>
        </div>

        {/* Premium Plan Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-[#FCECBE] transition duration-300">
        <div className="flex justify-between items-center mb-5">
          <div className="bg-[#ECFBF6] px-[22px] py-2 rounded-lg ">
            <h3 className="text-2xl font-bold text-left">${prices[billingCycle].standard} </h3>
            <h4>{billingCycle === 'monthly' ? 'Per Month' : 'Per Year'}</h4>
          </div>
          <p className="text-black font-medium mb-6 text-left">Premium Plan</p>
          </div>
          <ul className="text-black space-y-2 mb-6 text-left font-roboto text-[16px]">
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />200 Regular Ads</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />35 Featured Ads</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />30 Top Ads</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />10 Bumped up</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />24/7 Hours Support</li>
            <li><MdDoubleArrow className="inline-block mr-2 text-yellow-300" />Direct Message Option from Client</li>
          </ul>
          <button className="bg-yellow-400 text-white py-2 w-full rounded-md hover:bg-yellow-500 transition">Take the Plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
