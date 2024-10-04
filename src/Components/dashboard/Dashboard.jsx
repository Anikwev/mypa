import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaStar, FaHeart, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import { LuBadgeDollarSign } from 'react-icons/lu';
import { useSelector } from 'react-redux';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { getDatabase, ref, set , remove} from "firebase/database";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


export const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const data = useSelector((state) => state.counter.value);
  console.log(data);

  // ==================== log out =================
  const handleLogOut =()=>{
    // remove(ref(db, 'User/' + data.uid))
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate('/')
      localStorage.removeItem('userData')
      window.location.reload();       
     })
       .catch((error) => {
     });
   
  }



  return (
    <div className="flex h-screen bg-transparent">
      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 md:relative md:translate-x-0`}
      >
        <div className="p-4">
          {/* Close Button (Visible on Mobile Only) */}
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-2xl text-gray-700 focus:outline-none"
              aria-label="Close Sidebar"
            >
              <IoMdClose />
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center bg-[#C8F0E2] bg-opacity-40 border border-[#C8F0E2] rounded-lg p-2 mb-8">
            <img
              src={data.photoURL}
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-xl font-semibold">{data.displayName}</h4>
              <p className="text-sm text-gray-500">User Role</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            <Link
              to="#"
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-300"
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
            >
              <FaHome className="mr-3" /> Dashboard
            </Link>

            <Link
              to="#"
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-300"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaCogs className="mr-3" /> Appointments
            </Link>

            <Link
              to="/layoutTwo/wish"
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-300"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaHeart className="mr-3" /> Wishlist
            </Link>

            <Link
              to="/settings"
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-300"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaCogs className="mr-3" /> Settings
            </Link>

            <Link to='#'
              className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-300"
              onClick={handleLogOut}
            >
              <FaSignOutAlt className="mr-3" /> Logout
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow-md p-4">
          {/* Hamburger Menu Button (Visible on Mobile Only) */}
          <button
            className="text-2xl text-gray-700 md:hidden focus:outline-none"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open Sidebar"
          >
            <IoMdMenu />
          </button>

          {/* Logo (Hidden on Mobile) */}
          
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-8">
          <h1 className="text-3xl font-semibold mb-6">My Account</h1>

          {/* Smaller Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Number of Listings */}
            <div className="bg-white py-4 px-9 rounded-lg shadow-md flex flex-col items-start">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <FaHome color="orange" size={20} /> Number of Listings
              </h4>
              <p className="text-2xl font-bold text-orange-500">26</p>
            </div>

            {/* Number of Reviews */}
            <div className="bg-white py-4 px-9 rounded-lg shadow-md flex flex-col items-start">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <FaStar color="orange" size={20} /> Number of Reviews
              </h4>
              <p className="text-2xl font-bold text-orange-500">08</p>
            </div>

            {/* Number of Bookmarked */}
            <div className="bg-white py-4 px-9 rounded-lg shadow-md flex flex-col items-start">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <FaHeart color="orange" size={20} /> Number of Bookmarked
              </h4>
              <p className="text-2xl font-bold text-orange-500">57</p>
            </div>
          </div>

          {/* Graph and Subscription Plan */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Graph Section */}
            <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
              <h4 className="text-lg font-semibold mb-4">Total Views</h4>
              <div className="h-40 w-[500px] bg-gray-100 flex items-center justify-center rounded-lg">
                {/* Placeholder for chart */}
                <img className='h-full w-full' src="/images/graph.jpg" alt="graph" />
              </div>
            </div>

            {/* Subscription Plan */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
              <h4 className="text-lg font-bold text-black flex items-center gap-2 mb-4">
                <LuBadgeDollarSign color="orange" size={24} /> Starter Plan
              </h4>
              <div className="flex space-x-8 mb-6">
                <div className="flex flex-col items-center">
                  <p className="text-2xl font-bold text-gray-800">01</p>
                  <p className="text-xs text-gray-500">Publish Ads</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl font-bold text-gray-800">04</p>
                  <p className="text-xs text-gray-500">Ads Remaining</p>
                </div>
              </div>
              <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md text-sm font-semibold transition-colors duration-300">
                Upgrade
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
