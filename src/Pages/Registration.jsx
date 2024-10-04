import React, { useState } from 'react';
import { FaFacebookF ,FaGoogle  } from "react-icons/fa";
import { FaXTwitter, FaUnlock , FaLock  } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
const Registration = () => {
    // ======== react variables
    const [isLogin, setIsLogin]                          = useState(false)
    const [showPassword , setShowPassword]               = useState(false)
    const [password , setPassword]                       = useState()
    const [showConfirmPassword , setShowConfirmPassword] = useState(false)
    const [confirmPassword , setConfirmPassword]         = useState()
    const [firstName , setFirstName]                     = useState()
    const [lastName , setLastName]                       = useState()
    const [email , setEmail]                             = useState()
    const [NameError , setNameError]                     = useState('')
    const [confirmError , setConfirmError]               = useState('')
    const [passwordError , setPasswordError]             = useState('')
    const [emailError , setEmailError]                   = useState('')
    const navigate = useNavigate()
    // ======= firebase variables
    const auth = getAuth();


    // ======== functions
    const handleShow =()=>{
        setShowPassword(!showPassword)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
        setPasswordError("")
    }
    const handleConfirm=(e)=>{
        setConfirmPassword(e.target.value)
        setConfirmError("")
    }
    const handleConfirmShow =()=>{
        setShowConfirmPassword(!showConfirmPassword)
    }
    const handleFirstName=(e)=>{
        setFirstName(e.target.value)
        setNameError('')
    }
    const handleLastName=(e)=>{
        setLastName(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
        setEmailError('')
    }
    const handleNavigate =()=>{
      navigate('/login')
    }
    // ========== submit part function
    const handleSubmit=(e)=>{
        e.preventDefault()


        if(!firstName){
            setNameError('Enter your Name')
        }
        else if(!email){
                setEmailError('Enter your email')
        }
       else if(!password){
            setPasswordError('Enter your password')
        }
       else if(!confirmPassword){
            setConfirmError('Confirm your password')
        }
        else{
            if(password !== confirmPassword){
              toast.error('incorrect password!', {
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
               // ======= firebase functions
               createUserWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                  console.log(userCredential.user)
                  // ========= update profile and image
                   updateProfile(auth.currentUser, {
                   displayName: firstName + ' ' + lastName,
                   photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-GKjnABzDM6QtgdxFi3AVutidGiUDAr2QA&s"
                 })
                  // ========== send email varification
                  sendEmailVerification(auth.currentUser)
                  
                  //  ====== navigate
                  navigate('/login')
                  // ======= toast massage
                  toast.error('varify your emaile', {
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

                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode)
                  if(errorCode == 'auth/email-already-in-use'){
                    toast.error('email already in use', {
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
                  if(errorCode == 'auth/weak-password'){
                    toast.error('weak password', {
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
                });
            }
          
        }
    }
    return (
      <div className="relative min-h-screen flex items-start mt-[80px] justify-center">
         {/* ===== water mark ====== */}
         <div className="absolute top-[-200px] left-0 lg:w-[700px] z-[-1] overflow-hidden ">
          <img src="images/Group58.svg" alt="watermark" />
        </div>
        <div className="absolute top-24 right-0 lg:w-[600px] z-[-1] overflow-hidden ">
          <img className="" src="images/Group26.svg" alt="watermark" />
        </div>
         <div className="flex flex-col">
             {/*===== Toggle between Login and Registration ======== */}
          <div className="flex">
            <button
              onClick={handleNavigate}
              className={`w-1/2 py-3 text-center font-semibold font-roboto text-black border-b-[1px] border-b-gray-100 ${
                  isLogin ? 'bg-[#C8F0E2] text-black' : 'bg-[#FCECBE] text-black'
              } rounded-tl-lg transition duration-300 ease-in-out`}>
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-3 text-center font-semibold border-b-[1px] border-b-gray-100 ${
                  !isLogin ? 'bg-[#C8F0E2] text-black' : 'bg-[#FCECBE] text-black'
              } rounded-tr-lg transition duration-300 ease-in-out`}>
              Registration
            </button>
          </div>
        <div className="lg:w-[500px] md:w-[500px] w-[300px] max-w-lg bg-[#C8F0E2] mb-6 rounded-[0 0 10px 10px] shadow-lg md:p-8 p-4">
          {/*=========== Form ============= */}
          <form onSubmit={handleSubmit} className="mt-6 " >
            
                <div className="grid grid-cols-2 gap-4 mb-5">
                    {/* ========== first name ====== */}
                <div className="div">
                <lebel className='mt-3 font-semibold font-roboto'>First Name</lebel>
                  <input onChange={handleFirstName} type="text" name="firstName" placeholder="First Name" className="border border-gray-300 p-3 rounded-md w-full"/>
                  <p className="text-red-500">{NameError} </p>
                </div>
                {/* ============ last name ======== */}
                 <div className="div">
                 <lebel className='mt-3 font-semibold font-roboto'>Last Name</lebel>
                  <input onChange={handleLastName} type="text" name="lastName" placeholder="Last Name" className="border border-gray-300 p-3 rounded-md w-full" />
                 </div>
                </div>
             
            {/* ====== email ====== */}
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

              {/* ============= confirm password ======== */}
                <lebel className='mt-3 font-semibold font-roboto'>Re-Type password</lebel>
                <div className="relative">
                    {
                        showConfirmPassword?
                        <FaUnlock onClick={handleConfirmShow} className='icon absolute right-3 top-[50%] translate-y-[-50%] ' />
                         :
                        <FaLock onClick={handleConfirmShow} className='icon absolute right-3 top-[50%] translate-y-[-50%] ' />
                    }
                   <input onChange={handleConfirm} type={showConfirmPassword? 'text' : 'password'} name="confirmPassword" placeholder="Re-Type Password" className="border border-gray-300 p-3 rounded-md w-full mt-2"/>
                  </div>
                 <p className="text-red-500">{confirmError} </p>
                {/* ========= checkbox ============== */}
                <div className="mt-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="subscribe" className="form-checkbox text-green-500" />
                    <span className="ml-2">Yes, I want to receive Lottery Display emails</span>
                  </label>
                </div>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="agreeTerms" className="form-checkbox text-green-500"/>
                    <span className="ml-2"> I agree to all the <Link to="#" className="text-blue-600">Terms, Privacy Policy, and Fees</Link></span>
                  </label>
                </div>
             {/* ============ buttons ========= */}
            <button
              type="submit" className="w-full bg-green-400 text-white font-semibold py-3 mt-6 rounded-md hover:bg-green-500" >
              Register
            </button>
            {/* ============ social buttons============ */}
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
    );
  };
export default Registration;
