import React from 'react'
import { CiGrid41 } from 'react-icons/ci'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope, FaHeart, FaStar } from 'react-icons/fa6'
import { HiOutlineEye } from 'react-icons/hi'
import { TiLocationOutline } from 'react-icons/ti'

export const Featured = ({image ,country , views, brief, Ratings, price, category, type }) => {
  return (
    <div>
        <div className="bg-white shadow-md rounded-lg lg:w-80 w-[230px] border border-gray-200 overflow-hidden">
           {/* Image and Heart Icon */}
           <div className="relative">
             {image} 
             <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
               <FaHeart className="text-green-500" />
             </button>
             {/* Country and Views Section */}
           <div className=" absolute bottom-2 left-1/2 translate-x-[-50%] flex justify-between items-center text-sm text-black bg-white border-[1px] border-[#C8F0E2] rounded-[5px] p-2 w-[90%] ">
             <div className="flex items-center space-x-1">
               <TiLocationOutline className='text-lg text-yellow-300' />
               <span className='text-black font-semibold'>{country} </span>
             </div>
             <div className="flex items-center space-x-1">
               <HiOutlineEye className="text-yellow-400" />
               <span className="ml-1">{views} <span className='text-[#00CB84] text-[14px] font-roboto '>views</span> </span>
             </div>
           </div>
           </div>
           {/* Content Section */}
           <div className="p-4 pt-0">
             {/* Title */}
             <h3 className="text-lg font-semibold text-gray-800 mb-4 lg:mb-2 w-full h-[60px] mt-2">
               {brief}
             </h3>
     
             {/* Category, Rating and Stars */}
             <div className="w-full flex justify-between items-center mb-4">
                 <span className="text-green-600 text-md font-bold flex items-center gap-1 capitalize">
            <CiGrid41 />
                   {category}
                 </span>
                 <div className="flex items-center ml-2">
                   {[...Array(5)].map((_, i) => (
                     <FaStar key={i} className="text-yellow-400 text-sm" />
                   ))}
                   <span className="text-gray-500 text-sm ml-1">{Ratings}</span>
                 </div>
             </div>

             {/* Price and Status Tag */}
             <div className="flex justify-between items-center mb-4">
               <div className="text-xl font-bold text-gray-800">${price}</div>
               <div className="flex items-center gap-2">
                 <div className="flex items-center space-x-2">
                   <FaPhoneAlt className="text-red-300" />
                   <FaEnvelope className="text-red-300" />
                 </div>
                 <div className='border-[1px] border-[#00CB84] bg-[#C8F0E2] font-roboto font-bold text-xs px-2 py-1 rounded'> {type}</div>
               </div>
             </div>
           </div>
         </div>
    </div>
  )
}
