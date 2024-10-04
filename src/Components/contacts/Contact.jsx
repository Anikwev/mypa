import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-transparent py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Feel free to reach out to us for any inquiries or feedback. We'd love to hear from you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-xl text-gray-700">📧</span>
              <a href="mailto:your-email@example.com" className="text-lg text-blue-600 hover:underline">
                mypa-classic@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xl text-gray-700">📞</span>
              <p className="text-lg text-gray-700">+123 456 7890</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xl text-gray-700">📍</span>
              <p className="text-lg text-gray-700"> Toronto, Canada</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 flex space-x-6">
            <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600">
              <FaFacebook size={30} />
            </a>
            <a href="https://github.com" className="text-gray-600 hover:text-gray-800">
              <FaYoutube size={30} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-500">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#C8F0E2] p-8 shadow-lg rounded-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Contact Form</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Write your message here..."
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
