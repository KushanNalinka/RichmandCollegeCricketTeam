import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import schoolLogo from '../assets/images/FooterLogo.png'; // Adjust the path for the logo image file
import { FiPhone, FiMail } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const InitialFooter = () => {

    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      comments: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const serviceID = 'service_0bkryb1'; // Replace with your Service ID
      const templateID = 'template_np7nu0h'; // Replace with your Template ID
      const userID = 'kv2D0agjCdgahEhQg'; // Replace with your User ID
  
      emailjs.send(serviceID,templateID, formData, userID)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent successfully!');
        })
        .catch((error) => {
          console.log('FAILED...', error);
          alert('Failed to send the message. Please try again later.');
        });
    };

  return (
    <footer id="contact-us" className="bg-white mt-10">
      <div className="flex flex-col">
        {/* Header */}
        {/* Three Divs for Contact Info - Adjust for Mobile Responsiveness */}
<div className="flex flex-col md:flex-row justify-between items-center">
  <div className="w-full bg-[#4A0D34] text-white p-4 md:p-6 flex justify-center items-center">
    <div className="flex items-center space-x-2">
      <FiPhone size={24} />
      <span>0914941717</span>
    </div>
  </div>
  <div className="w-full bg-[#CBECFF] text-black p-4 md:p-6 flex justify-center items-center">
    <div className="flex items-center space-x-2">
      <FiMail size={24} />
      <span>richmondcollege.lk</span>
    </div>
  </div>
  <div className="w-full bg-[#00175F] text-white p-4 md:p-6 flex justify-center items-center">
    <div className="flex items-center space-x-2">
      <HiOutlineLocationMarker size={24} />
      <span>3633+2W4, Richmond Hill Rd, Galle</span>
    </div>
  </div>
</div>


        {/* Contact Form & Map */}
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-center items-center p-8 bg-gray-200 text-white space-y-8 md:space-y-0 md:space-x-8">
       
          <div className="flex flex-col space-y-4 w-full max-w-md">
          
            <h2 className="text-2xl mb-4 text-[#00175F]">Contact Us</h2>
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg bg-[#00175F] text-white"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-[#00175F] text-white"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
            />
            <input
              type="text"
              placeholder="Phone"
              className="p-3 rounded-lg bg-[#00175F] text-white"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Type your message"
              className="p-3 rounded-lg bg-[#00175F] text-white"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="bg-[#00175F] text-white p-3 rounded-lg hover:bg-blue-700">
              Send
            </button>
            
            
          </div>
          
          
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.9736637297841!2d80.20476713619843!3d6.052398003287749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173ef4cc6b88d%3A0xd9c5ef5a5f92100b!2sRichmond%20College!5e0!3m2!1sen!2slk!4v1728029605245!5m2!1sen!2slk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        </form>
        {/* Footer */}
        <div className="bg-gray-200 py-4">
          <div className="container mx-auto text-center">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={schoolLogo}
                alt="School Logo"
                className="h-12 md:h-16" // Adjust height for consistency
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 md:space-x-6 mb-4">
              <a href="https://web.facebook.com/richmondcollegecricket/?_rdc=1&_rdr" target="_blank" rel="noreferrer">
                <FaFacebookF className="text-gray-600 hover:text-gray-900 text-lg md:text-xl sm:text-2xl" />
              </a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fcheerrichmond" target="_blank" rel="noreferrer">
                <FaTwitter className="text-gray-600 hover:text-gray-900 text-lg md:text-xl sm:text-2xl" />
              </a>
              <a href="https://www.instagram.com/richmondcollege?igsh=aXhoOG9nMWNxZ3hx" target="_blank" rel="noreferrer">
                <FaInstagram className="text-gray-600 hover:text-gray-900 text-lg md:text-xl sm:text-2xl" />
              </a>
              <a href="https://www.youtube.com/channel/UC66Y9YztiHjs3H-kX8_OKPg" target="_blank" rel="noreferrer">
                <FaYoutube className="text-gray-600 hover:text-gray-900 text-lg md:text-xl sm:text-2xl" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-600 text-sm mt-4">
              <p>© 2024 Richmond College</p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-start justify-center items-center space-y-4 md:space-y-0 md:space-x-5 mt-4">
  <a 
    href="https://slsca.batsman.com/live" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="bg-[#10164C] text-white px-6 py-2 rounded-lg hover:bg-[#0c113a] w-full md:w-auto">
      SLCSA ↗
    </button>
  </a>
  <a 
    href="/initialrole"
  >
    <button className="bg-[#4A0D34] text-white px-6 py-2 rounded-lg hover:bg-[#3a0b2a] w-full md:w-auto">
      Sponsored By
    </button>
  </a>
</div>



          </div>
        </div>
      </div>
    </footer>
  );
};

export default InitialFooter;
