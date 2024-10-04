import React from 'react'

export const ButtonOne = ({icon ,bg, text}) => {
  return (
    <>
        <div className={`px-[14px] rounded-lg py-5 flex items-center gap-[10px] ${bg} `}>
            {icon}
            <h4 className='lg:text-[18px] text-[12px] font-roboto font-bold'>{text} </h4>
        </div>
    </>
  )
}
