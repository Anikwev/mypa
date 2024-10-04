import React, { useEffect } from 'react'
import { NavbarTwo } from '../Components/Navbar/NavbarTwo'
import { Outlet, useNavigate } from 'react-router-dom'
import { Footer } from '../Components/footer/Footer'
import { useSelector } from 'react-redux'

export const LayOutTwo = () => {
    const userSliceData = useSelector((state)=>state.counter.value)
    const navigate = useNavigate()


    useEffect(()=>{
        if(userSliceData == null){
          navigate('/')
        }
      }, [])
  return (
    <div>
        <NavbarTwo />
        <Outlet/>
        <Footer/>
    </div>
  )
}
