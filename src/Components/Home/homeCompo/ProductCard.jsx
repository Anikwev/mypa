import React, { useState } from 'react';
import { FaHeart, FaPhoneAlt, FaEnvelope, FaStar } from 'react-icons/fa';
import { HiOutlineEye } from 'react-icons/hi';
import Product from '../../../ProductData';
import { CiGrid41 } from "react-icons/ci";
import { TiLocationOutline } from "react-icons/ti";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const ProductCard = () => {
  // ====== react variables =================================
  const navigate = useNavigate()
  // ====== get data from redux
  const userSlice = useSelector((state)=>state.counter.value)
  //  get data from API =================
  const [data , setData] =useState(Product)
  const handleData =(allData)=>{
      const filterData = Product.filter((filterProducts)=>{
          return filterProducts.category == allData

      })
      setData(filterData)
      console.log(allData)
  }
  const handleMassage=()=>{
    if(userSlice == null){
      navigate('/contact')
    }else{
      navigate('/layoutTwo/contact')
    }
  }

  return (
       <div className="container">
        <div className="mb-10">
        <div className="bg-white border-[1px] border-[#C8F0E2] px-5 py-3 rounded-lg flex-wrap flex justify-start gap-4 lg:gap-8 items-center mb-10 w-full mt-5">
          <button onClick={()=>setData(Product)} className='text-[16px] text-black font-roboto font-normal hover:text-[#00CB84] '>All</button>
          <button onClick={()=>handleData('electronics')} className='text-[16px] text-black font-roboto font-normal hover:text-[#00CB84] '>Electronics</button>
          <button onClick={()=>handleData('health')} className='text-[16px] text-black font-roboto font-normal hover:text-[#00CB84] '>Health</button>
          <button onClick={()=>handleData('food')} className='text-[16px] text-black font-roboto font-normal hover:text-[#00CB84] '>Food</button>
          <button onClick={()=>handleData('restaurant')} className='text-[16px] text-black font-roboto font-normal hover:text-[#00CB84] '>Restaurant</button>
          <button onClick={()=>handleData('cars')} className='text-[16px] text-black font-roboto font-normal hover:text-[#00CB84] '>Cars</button>
          <button onClick={()=>handleData('property')} className='text-[16px] text-black font-roboto font-normal hover:text-[#00CB84] '>Property</button>
          <button onClick={()=>handleData('education')} className='text-[16px] text-black font-roboto font-normal hover:text-[#00CB84] '>Education</button>
          <button onClick={()=>handleData('grocery')} className='text-[16px] text-black font-roboto font-normal hover:text-[#00CB84] '>Grocery</button>
        </div>
        <div className="flex items-center justify-center gap-10 flex-wrap">
        { data.map((item)=>(
          <div key={item.id} className="bg-white shadow-md rounded-lg w-80 border border-gray-200 overflow-hidden">
           {/* Image and Heart Icon */}
           <di className="relative">
             <img
               src={item.image} // Replace with actual product image URL
               alt="Product"
               className="w-full h-48 object-cover"
               />
             {/* <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
               <FaHeart className="text-green-500" />
             </button> */}
             {/* Country and Views Section */}
           <div className=" absolute bottom-2 left-1/2 translate-x-[-50%] flex justify-between items-center text-sm text-black bg-white border-[1px] border-[#C8F0E2] rounded-[5px] p-2 w-[90%] ">
             <div className="flex items-center space-x-1">
               <TiLocationOutline className='text-lg text-yellow-300' />
               <span className='text-black font-semibold'>{item.country} </span>
             </div>
             <div className="flex items-center space-x-1">
               <HiOutlineEye className="text-yellow-400" />
               <span className="ml-1">{item.views} <span className='text-[#00CB84] text-[14px] font-roboto '>views</span> </span>
             </div>
           </div>
           </di>
           {/* Content Section */}
           <div className="p-4 pt-0">
             {/* Title */}
             <h3 className="text-lg font-semibold text-gray-800 mb-2 w-full h-[60px] mt-2">
               {item.brief}
             </h3>
     
             {/* Category, Rating and Stars */}
             <div className="w-full flex justify-between items-center mb-4">
                 <span className="text-green-600 text-md font-bold flex items-center gap-1 capitalize">
            <CiGrid41 />
                   {item.category}
                 </span>
                 <div className="flex items-center ml-2">
                   {[...Array(5)].map((_, i) => (
                     <FaStar key={i} className="text-yellow-400 text-sm" />
                   ))}
                   <span className="text-gray-500 text-sm ml-1">{item.ratings}</span>
                 </div>
             </div>

             {/* Price and Status Tag */}
             <div className="flex justify-between items-center mb-4">
               <div className="text-xl font-bold text-gray-800">${item.price}</div>
               <div className="flex items-center gap-2">
                 <div className="flex items-center space-x-2">
                   <div onClick={handleMassage} className="div"><FaPhoneAlt className="text-red-300" /></div>
                   <div onClick={handleMassage} className="div"><FaEnvelope className="text-red-300" /></div>
                 </div>
                 <div className='border-[1px] border-[#00CB84] bg-[#C8F0E2] font-roboto font-bold text-xs px-2 py-1 rounded'> {item.type}</div>
               </div>
             </div>
           </div>
         </div>
            ))
          }
         </div>
         </div>
       </div>
  );
};

export default ProductCard;
