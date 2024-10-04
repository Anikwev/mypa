import React, { useEffect } from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { Footer } from '../Components/footer/Footer'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export const LayoutOne = () => {
    //  const [counter, setCounter] = useState(userSliceData)
    //  const [counterTwo, setCounterTwo] = useState(null)

  // ========== login data =================
 
 

     

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
