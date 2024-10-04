import React, { useEffect, useState } from 'react';
import { FaHeart, FaHome, FaBuilding, FaRulerCombined, FaRegHeart, FaCheck, FaBed, FaBath } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { IoGrid } from 'react-icons/io5';
import { RiNewsLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const WishListCompo = () => {
  // ============= get data from redux
  const wishSlice = useSelector((state)=>state.counterWishList.wishValue)
  console.log(wishSlice)

  return (
    <div className="bg-gray-100 min-h-screen py-10 container">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-roboto mt-[100px] mb-[22px] text-center text-gray-800">
          My <span className='text-[#F6B400] '>Wishlist</span>
        </h1>
        <p className='font-roboto text-[20px] text-center mb-[80px] '>Here is the favorite properties</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {
            wishSlice.map((item)=>(
              <div className="lg:w-[300px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out m-4">
              {/* Property Image */}
              <div className="relative">
                <img
                  className="w-full h-56 object-cover"
                  src={item.imageTwo}
                  alt="Property"
                  />
                {/* Badges */}
                <div className="absolute bottom-2 left-2 flex flex-col gap-2">
                  
                  <span className={`bg-white border-[1px] ${item.authority?'border-green-400 border-[1px] ':'border-red-500 border-[1px] '} flex items-center gap-1 text-black text-xs font-bold px-2 py-1 rounded`}><span className={`p-[3px] ${item.authority?'bg-[#00CB84]':'bg-red-500'} rounded-full `}>{item.authority?<FaCheck  color='white' />:<ImCross   color='white' />} </span> Governors Consent / C of O</span>
                  <span className={`bg-white border-[1px] ${item.permission?'border-green-400 border-[1px] ':'border-red-500 border-[1px] '} flex items-center gap-1 text-black text-xs font-bold px-2 py-1 rounded`}><span className={`p-[3px] ${item.permission?'bg-[#00CB84]':'bg-red-500'} rounded-full `}>{item.permission?<FaCheck  color='white' />:<ImCross   color='white' />} </span> Original Property Owner Etc.</span>
                </div>
                {/* Favorite Icon */}
                {/* <button className={` ${favorite? 'text-green-500 hover:text-green-700 bg-white' :'bg-green-500 text-white'} absolute top-2 right-2 w-[30px] h-[30px]  rounded-full flex justify-center items-center `}>
                   <FaRegHeart />
                </button>
                 */}
              </div>
        
              {/* Property Details */}
              <div className="px-3 py-4">
                {/* Title */}
                <h2 className="font-bold w-[350px] sm:w-[250px] text-md mb-1">{item.description} </h2>
        
                {/* Price */}
                <div className="flex justify-between items-center">
                  <span className=" flex items-center gap-1 text-green-600 text-xs font-bold px-2 py-1 rounded-full"><IoGrid /> {wishSlice.type}</span>
                  <span className="font-bold text-xl">{item.price}$ </span>
                </div>
              </div>
        
              {/* Property Features */}
              <div className="px-2 py-4 border-t flex justify-between">
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  {/* Bedrooms */}
                  <div className="flex items-center space-x-1">
                    <FaBed className="text-md text-red-300 " />
                    <span className='text-[13px]'>{item.bedroom} Bed </span>
                  </div>
                  {/* Bathrooms */}
                  <div className="flex items-center space-x-1">
                    <FaBath className="text-md text-red-300 " />
                    <span className='text-[13px]'>{item.bathroom} Bath </span>
                  </div>
                  {/* Area */}
                  <div className="flex items-center space-x-1">
                    <RiNewsLine  className="text-md text-red-300 " />
                    <span className='text-[13px]'>{item.square_fit} sqft </span>
                  </div>
                </div>
                <button className="bg-[#F6B400] hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded"> Details</button>
              </div>
            </div>
            ))
           }
        </div>
      </div>
    </div>
  );
};

export default WishListCompo;
