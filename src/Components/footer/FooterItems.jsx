import React from 'react'
import { PiExcludeSquareThin } from "react-icons/pi";
import { Link } from 'react-router-dom';

export const FooterItems = ({heading , one , two ,three, four}) => {
  return (
    <>
    <div className="">
        <div className="mb-7">
            <h3 className="text-[16px] font-roboto font-bold text-[#000001] mb-1 ">{heading} </h3>
            <div className="flex items-center gap-2">
                <div className="w-[60px] h-1 bg-[#F6B400] rounded-lg "></div>
                <div className="w-[20px] h-1 bg-[#F6B400] rounded-lg "></div>
                <div className="w-[8px] h-1 bg-[#F6B400] rounded-lg "></div>
            </div>
        </div>
        <div className="flex flex-col gap-[12px]">
            <Link to="#" className="text-[16px] font-normal font-roboto text-[#707070] hover:text-[#F6B400] flex items-center gap-5 ">
              <div className="text-black"><PiExcludeSquareThin /></div>  {one}</Link>
            <Link to="#" className="text-[16px] font-normal font-roboto text-[#707070] hover:text-[#F6B400] flex items-center gap-5 ">
              <div className="text-black"><PiExcludeSquareThin /></div>  {two}</Link>
            <Link to="#" className="text-[16px] font-normal font-roboto text-[#707070] hover:text-[#F6B400] flex items-center gap-5 ">
              <div className="text-black"><PiExcludeSquareThin /></div>  {three}</Link>
            <Link to="#" className="text-[16px] font-normal font-roboto text-[#707070] hover:text-[#F6B400] flex items-center gap-5 ">
              <div className="text-black"><PiExcludeSquareThin /></div>  {four}</Link>
        </div>
    </div>
    </>
  )
}
