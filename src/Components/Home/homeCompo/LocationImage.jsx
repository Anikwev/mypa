import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";

export const LocationImage = ({flag , place ,far ,image}) => {
  return (
    <div className='relative  w-[270px] h-[270px] border-[1px] border-[#C8F0E2] rounded-lg'>
      {image}
      <div className="w-[30px] h-[30px] bg-white border-[1px] border-[#C8F0E2] rounded-md flex justify-center items-center absolute top-5 left-5"> {flag}</div>
      <div className=" flex justify-between items-center w-[250px] py-2 px-[9px] bg-white border-[1px] border-[#C8F0E2] rounded-[4px] absolute bottom-5 left-2 ">
        <div className="flex justify-center items-center gap-1">
          <div className="text-yellow-500 "><IoLocationOutline /></div>
          <h3 className='text-[12px] font-roboto font-normal text-[#000001] '>{place} </h3>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className='text-sm'><IoIosPeople /></div>
          <h2 className='text-[12px] font-roboto font-normal text-[#000001]'>{far} </h2>
          <h3 className='text-[9px] text-[#00CB84] font-roboto font-normal '>Population</h3>
        </div>
      </div>
    </div>
  )
}
