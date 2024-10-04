import React, { useState } from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FcDocument } from "react-icons/fc";
import { FiHome } from "react-icons/fi";
import { FaHome, FaBed, FaBath } from "react-icons/fa";
import { GiResize, GiLandMine } from "react-icons/gi";
import { RiFridgeLine } from "react-icons/ri";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { MdConnectedTv, MdMicrowave } from "react-icons/md";
import { GiGymBag, GiWaterFountain, GiBarbecue } from "react-icons/gi";
import { BiSolidWasher } from "react-icons/bi";
import { PiBathtubLight } from "react-icons/pi";
import { FaSwimmer, FaShower, FaTree } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export const PropertyDetails = () => {
  // ========== get data from redux =================
  const dataSlice = useSelector((state) => state.counterProperty.value);
  console.log(dataSlice)
  // ============ react variables =================
  const [isExpanded, setIsExpanded] = useState(false);
  const [backHome , setBackHome] = useState();
  const navigate = useNavigate();
// ============== functions =================
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  const handleBackHome = () => {
    navigate('/blog')
   };
  // ============== slider ===============
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 1024, // lg
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768, // md
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 480, // sm
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <>
       <section className="container mb-6 mt-10">
        <div onClick={handleBackHome} className="mb-5">
          <FaArrowLeft size={30}/>
        </div>
       <Slider {...settings}>
      <div className='w-[300px] h-[300px] '>
        <img className='w-full h-full' src={dataSlice.imageOne} alt="" />
      </div>
      <div className='w-[300px] h-[300px] '>
        <img className='w-full h-full' src={dataSlice.imageTwo} alt="" />
      </div>
      <div className='w-[300px] h-[300px] '>
         <img className='w-full h-full' src={dataSlice.imageThree} alt="" />
      </div>
      <div className='w-[300px] h-[300px] '>
         <img className='w-full h-full' src={dataSlice.imageFour} alt="" />
      </div>
    </Slider>

       </section>
        <section className="container">
        <div className="w-full bg-[#FFF] rounded-[10px] shadow-md m-3 md:p-8 p-3">
          <div className="flex justify-between gap-7">
            <div className=' '>
              <h1 className="md:text-2xl text-xl font-bold mb-2">
                {dataSlice.description}
              </h1>
              <p className="md:text-2xl text-xl text-[#16A34A] font-bold">{dataSlice.square_fit} sqft </p>
            </div>
            <div className=" items-center mt-4">
              <h6 className="text-3xl font-bold text-green-600">{dataSlice.price}$</h6>
              <p className="text-sm flex justify-center text-gray-500">
                (Negotiable)
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="bg-[#F2FBF8] justify-center items-center flex gap-1 md:py-5 md:px-5 p-2 rounded-md">
              <span className="text-orange-500 pt-[3px]">
                <MdOutlineLocationOn />
              </span>
              <h2 className='w-full '>{dataSlice.location}</h2>
            </div>
            <div className="lg:w-[200px] w-[100px]">
            {/* Rating Section */}
            <div className="w-full mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Rating</span>
                <span>{dataSlice.rating}</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div className="h-full rounded-full" style={{ width: `${(dataSlice.rating / 5) * 100}%`, background: `linear-gradient(to right, #f00, #ff0, #0f0)`, }}></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="w-full bg-[#FFF] rounded-[10px] shadow-md m-3 p-8 flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center">
          <div className="">
            <div>
              <h6>Property Overview</h6>
            </div>
          <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* =============== bedroom ======== */}
          <div className="bg-[#F2FBF8] shadow-md md:p-10 p-4 w-[160px] md:w-[220px]  rounded-lg flex justify-between items-center">
            {/* Flex container for icon and label aligned to the start */}
            <div className="flex justify-center items-center gap-2 md:gap-5">
              <div className='bg-white md:p-3 p-1 rounded-xl '><FaBed size={30} color='#00CB84'/></div>
              <div>
                <div className="md:text-lg text-md font-semibold">Bedroom</div>
                <div className="text-black text-md md:text-lg font-bold">{dataSlice.bedroom} </div>
              </div>
            </div>
           </div>
          {/* =================== bathroom ========== */}
          <div className="bg-[#F2FBF8] shadow-md md:p-10 p-4 w-[160px] md:w-[220px]  rounded-lg flex justify-between items-center">
            {/* Flex container for icon and label aligned to the start */}
            <div className="flex justify-center items-center gap-5">
              <div className='bg-white md:p-3 p-1 rounded-xl '><FaBath size={30} color='#00CB84'/></div>
              <div>
                <div className="md:text-lg text-md font-semibold">Bathroom</div>
                <div className="text-black text-md md:text-lg font-bold">{dataSlice.bathroom} </div>
              </div>
            </div>
           </div>
          {/* ================= size ============= */}
          <div className="bg-[#F2FBF8] shadow-md md:p-10 p-4 w-[160px] md:w-[220px]  rounded-lg flex justify-between items-center">
            {/* Flex container for icon and label aligned to the start */}
            <div className="flex justify-center items-center gap-5">
              <div className='bg-white md:p-3 p-1 rounded-xl '><GiResize size={30} color='#00CB84'/></div>
              <div>
                <div className="md:text-lg text-md font-semibold">Property Size</div>
                <div className="text-black text-md md:text-lg font-bold">{dataSlice.square_fit} </div>
              </div>
            </div>
           </div>
          </div>
      </div>
    </div>
          <div className="flex items-start justify-start flex-col gap-5">
              <div>
                <p className="flex items-center gap-2">
                  <span className="pt-[3px] text-blue-400">
                    <FiHome />
                  </span>
                  Property type:{"  "}
                  <span className="bg-orange-300 p-1 rounded-[6px]">
                    Residential
                  </span>
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2">
                  <span className="pt-[3px] text-blue-400">
                    <FiHome />
                  </span>
                  Purpose:{"  "}
                  <span className="bg-yellow-400 p-1 rounded-[6px]">
                    {dataSlice.purpose}
                  </span>
                </p>
              </div>
            </div>
          </div>
      </section>
      {/* ============ */}
      <div className="container p-6 ">
        <div className=" mx-auto bg-white shadow-md rounded-lg p-8">
          {/* About This Property Section */}
          <h2 className="text-2xl font-bold mb-4">About This Property</h2>
          <div className="flex gap-4">
            <div className="lorem250">
              <p
                className={`leading-relaxed ${
                  isExpanded ? "" : "line-clamp-5"
                } overflow-hidden`}>
                {dataSlice.about_property}
              </p>
              <div className="text-right">
                <button
                  onClick={toggleText}
                  className="text-yellow-500 underline mt-2 focus:outline-none"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Amenities Section */}
        <div className=" mx-auto bg-white mt-2 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mt-3 mb-4">Features & Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex items-center bg-[#F2FBF8] p-3 rounded-lg space-x-2">
              <TbAirConditioningDisabled className="text-yellow-500" />
              <span>Air Conditioning</span>
            </div>
            <div className="flex items-center bg-[#F2FBF8] p-3 rounded-lg space-x-2">
              <MdConnectedTv className="text-yellow-500" />
              <span>TV Cable</span>
            </div>
            <div className="flex items-center bg-[#F2FBF8] p-3 rounded-lg space-x-2">
              <GiBarbecue className="text-yellow-500" />
              <span>Barbeque</span>
            </div>
            <div className="flex items-center bg-[#F2FBF8] p-3 rounded-lg space-x-2">
              <GiGymBag className="text-yellow-500" />
              <span>Gymnasium</span>
            </div>
            <div className="flex items-center bg-[#F2FBF8] p-3 rounded-lg space-x-2">
              <FaSwimmer className="text-yellow-500" />
              <span>Swimming Pool</span>
            </div>
            <div className="flex items-center bg-[#F2FBF8] p-3 rounded-lg space-x-2">
              <MdMicrowave className="text-yellow-500" />
              <span>Microwave</span>
            </div>
            <div className="flex items-center bg-[#F2FBF8] p-3 rounded-lg space-x-2">
              <FaShower className="text-yellow-500" />
              <span>Outdoor Shower</span>
            </div>
            <div className="flex items-center bg-[#F2FBF8] p-3 rounded-lg space-x-2">
              <FaTree className="text-yellow-500" />
              <span>Lawn</span>
            </div>
            <div className="flex items-center bg-[#F2FBF8] p-3 rounded-lg space-x-2">
              <RiFridgeLine className="text-yellow-500" />
              <span>Refrigerator</span>
            </div>
            <div className="flex items-center bg-[#F2FBF8] p-3 rounded-lg space-x-2">
              <PiBathtubLight className="text-yellow-500" />
              <span>Sauna</span>
            </div>
            <div className="flex items-center bg-[#F2FBF8] p-3 rounded-lg space-x-2">
              <BiSolidWasher className="text-yellow-500" />
              <span>Washer</span>
            </div>
            <div className="flex items-center bg-[#F2FBF8] p-3 rounded-lg space-x-2">
              <GiWaterFountain className="text-yellow-500" />
              <span>Water Fountain</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
