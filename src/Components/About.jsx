import React from 'react'
import { FaUser, FaHistory, FaGlobe, FaHandshake, FaTools, FaBullseye, FaRegLightbulb, FaHeart, FaUserShield, FaChartLine } from 'react-icons/fa';



export const About = () => {
  return (
    <>
    <section className="bg-[#F8FBFA] relative w-full min-h-screen text-gray-900 py-16 overflow-x-hidden">
         {/* ===== water mark ====== */}
         <div className="one absolute top-[-30%] left-0 w-[700px] z-[-1]  ">
          <img src="/images/Group58.svg" alt="watermark" />
        </div>
        <div className=" two absolute top-5 right-0 w-[600px] z-[-1] overflow-hidden ">
          <img className="" src="/images/Group26.svg" alt="watermark" />
        </div>
        <div className=" three ">
          <img className="" src="images/Group26.svg" alt="watermark" />
        </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">About My PA</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            My PA is your personal marketplace that connects you with essential services and goods. From real estate to groceries, pharmacies, and car deals, we offer everything in one place, making life simpler and more convenient for you.
          </p>
        </div>

        {/* Vision, Mission, and Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Vision */}
          <div className="text-center">
            <FaBullseye className="text-6xl text-yellow-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-base text-gray-600 leading-relaxed px-4">
              To create a thriving platform where individuals can seamlessly access essential services from trusted local providers, all while fostering a strong community of businesses and consumers.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center">
            <FaRegLightbulb className="text-6xl text-yellow-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-base text-gray-600 leading-relaxed px-4">
              To simplify life by offering an easy-to-use, secure, and reliable platform that connects users with businesses, providing them access to a broad range of services with ease and confidence.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="text-center">
            <FaHeart className="text-6xl text-yellow-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <p className="text-base text-gray-600 leading-relaxed px-4">
              We prioritize user experience and ensure trust and reliability in every transaction. Whether you're a buyer or a business, My PA delivers a simple, efficient, and enjoyable platform that meets all your needs.
            </p>
          </div>
        </div>

        {/* Expanded Content Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Trust and Security */}
          <div className="text-center">
            <FaUserShield className="text-6xl text-yellow-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Trust & Security</h3>
            <p className="text-base text-gray-600 leading-relaxed px-4">
              We know how important security is, which is why we ensure a secure platform where your personal information and transactions are protected every step of the way.
            </p>
          </div>

          {/* Partnerships */}
          <div className="text-center">
            <FaHandshake className="text-6xl text-yellow-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Strong Partnerships</h3>
            <p className="text-base text-gray-600 leading-relaxed px-4">
              Our platform has built strong relationships with reputable local and national service providers to give you the best deals and reliable services.
            </p>
          </div>

          {/* Growth */}
          <div className="text-center">
            <FaChartLine className="text-6xl text-yellow-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Continuous Growth</h3>
            <p className="text-base text-gray-600 leading-relaxed px-4">
              We are committed to innovation and growth, continually improving our platform to offer new features, better services, and an exceptional user experience.
            </p>
          </div>
        </div>

        {/* Our Journey Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* History Content */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Journey</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since our inception, My PA has been committed to simplifying the lives of people by offering a comprehensive, user-friendly platform that connects you with trusted service providers. From humble beginnings, we have grown into a reliable platform used by thousands of users, helping them find the services they need with ease.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Over the years, we have expanded our services and product offerings, partnering with local and national businesses to provide high-quality, trusted services that meet your needs.
              </p>
            </div>
            
            {/* History Image */}
            <div className="text-center">
              <img
                src="/images/office-buildings.png"
                alt="About My PA"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-[#C8F0E2] bg-opacity-40 p-8 ">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Join Our Journey</h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
            At My PA, we believe in providing the best services with trust and reliability at the core. Whether you're looking for essential services, deals, or partnerships, we are here to help. Join us as we continue to grow and innovate!
          </p>
          <button className="mt-6 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition duration-300">
            Get Started with MyPA
          </button>
        </div>
      </div>
    </section>
    </>
  )
}
