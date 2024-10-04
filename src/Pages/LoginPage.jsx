import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF ,FaGoogle  } from "react-icons/fa";
import { FaXTwitter, FaUnlock , FaLock  } from "react-icons/fa6";
import { getAuth, reload, signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { userData } from '../slices/UserSlice';
import { getDatabase, ref, set } from "firebase/database";

export const LoginPage = () => {
    const [email , setEmail]                             = useState()
    const [passwordError , setPasswordError]             = useState('')
    const [emailError , setEmailError]                   = useState('')
    const [showPassword , setShowPassword]               = useState(false)
    const [password , setPassword]                       = useState()
    const [isLogin, setIsLogin]                          = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // ========= firebase variables ==========
    const auth = getAuth();
    const db = getDatabase();

    // ======== functions
    const handleShow =()=>{
        setShowPassword(!showPassword)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
        setPasswordError("")
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
        setEmailError('')
    }
    const handleNavigate =()=>{
      navigate('/registration')
    }
    // ========== submit part function
    const handleSubmit=(e)=>{
        e.preventDefault()


        if(!email){
                setEmailError('Enter your email')
        }
       else if(!password){
            setPasswordError('Enter your password')
        }
        else{
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              // ======== email varification massage
              if(userCredential.user.emailVerified == false){
                toast.error('varify your email', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition: Bounce,
                  });
              }
              else{
                // ====== login success massage
                toast.success('Successful!', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition: Bounce,
                  });
                  // ==== store data in local storage
                  localStorage.setItem('userData', JSON.stringify(user))
                  // ======= dispatch data part
                  dispatch(userData(user))
                  // ===== navigate to dashboard
                navigate('/layoutTwo/profilePage')
                // ========= realtime database
                set(ref(db, 'User/' + user.uid ), {
                  userName: user.displayName,
                  userPhoto: user.photoURL,
                  uid: user.uid,
                });
              }
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
               // ===== wrong email toast massage 
                toast.error('Wrong email or Password', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition: Bounce,
                  });
            });
        }
        }
  return (
    <>
       <div className="relative min-h-screen flex items-start mt-[80px] justify-center">
        {/* ===== water mark ====== */}
        <div className="absolute top-[-200px] left-0 lg:w-[700px] z-[-1] ">
          <img src="images/Group58.svg" alt="watermark" />
        </div>
        <div className="absolute top-24 right-0 lg:w-[600px] z-[-1] overflow-hidden ">
          <img className="" src="images/Group26.svg" alt="watermark" />
        </div>
         <div className="flex flex-col">
         {/*===== Toggle between Login and Registration ======== */}
         <div className="flex">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-3 text-center font-semibold font-roboto text-black border-b-[1px] border-b-gray-100 ${
                  isLogin ? 'bg-[#C8F0E2] text-black' : 'bg-[#FCECBE] text-black'
              } rounded-tl-lg transition duration-300 ease-in-out`}>
              Login
            </button>
            <button
              onClick={handleNavigate}
              className={`w-1/2 py-3 text-center font-semibold border-b-[1px] border-b-gray-100 ${
                  !isLogin ? 'bg-[#C8F0E2] text-black' : 'bg-[#FCECBE] text-black'
              } rounded-tr-lg transition duration-300 ease-in-out`}>
              Registration
            </button>
          </div>
          <div className="lg:w-[500px] md:w-[400px] w-[300px] max-w-lg bg-[#C8F0E2] mb-6 rounded-[0 0 10px 10px] shadow-lg md:p-8 p-4">
            {/* ========= main form ====== */}
            <form onSubmit={handleSubmit} className="mt-6 ">
              {/*====== email =========== */}
            <lebel className='mt-3 font-semibold font-roboto'>Email</lebel>
            <input onChange={handleEmail} type="email" name="email" placeholder="Your E-mail" className="border border-gray-300 p-3 rounded-md w-full mt-2" />
            <p className="text-red-500 mb-5">{emailError} </p>

            {/* ======= password ====== */}
            <lebel className='font-semibold font-roboto'>password</lebel>
              <div className="relative  ">
                {
                    showPassword?
                    <FaUnlock onClick={handleShow} className='icon absolute right-3 top-[45%] translate-y-[-50%] ' />
                    :
                    <FaLock onClick={handleShow} className='icon absolute right-3 top-[45%] translate-y-[-50%] ' />
                }
                <input onChange={handlePassword} type={showPassword? 'text' : 'password'} name="password" placeholder="Password" className="border border-gray-300 p-3 rounded-md w-full mt-2 "/>
              </div>
                <p className="text-red-500 mb-5">{passwordError} </p>
                {/* ====== forgot password ========== */}
               <Link to='#' className='flex justify-end'>forgot Password?</Link>
               {/* ======== submit button ============ */}
               <button
              type="submit" className="w-full bg-green-400 text-white font-semibold py-3 mt-6 rounded-md hover:bg-green-500" >
              login
            </button>
            {/* ======= social buttons ======= */}
            <h4 className="text-black mt-8 font-roboto text-center">For faster login use your social account</h4>
            <div className="flex justify-center mt-3 space-x-4">
              <Link to="#" className=" text-[#00CB84] bg-white p-3 rounded-full "><FaFacebookF /></Link>
              <Link to="#" className=" text-[#00CB84] bg-white p-3 rounded-full "><FaXTwitter /></Link>
              <Link to="#" className=" text-[#00CB84] bg-white p-3 rounded-full "><FaGoogle  /></Link>
            </div>
            </form>
          </div>
         </div> 
       </div>
           
    </>
  );
}
