import React from 'react'

export const SliderImage = ({bg , title , text , image}) => {
  return (
    <>
    <div className={`px-[31px] py-[30px] ${bg} rounded-[10px] text-center mr-8 flex flex-col justify-center items-center `}>
        <div className=" w-[96px] h-[96px] mx-auto">
           {image}
        </div>
        <h2 className='text-[20px] text-[#000001] font-roboto font-bold mt-[22px] mb-[15px] leading-6 '>{title} </h2>
        <p className="text-[16px] font-roboto font-normal text-center text-[#000] leading-5 w-[197px] ">{text} </p>
    </div>
    </>
  )
}
