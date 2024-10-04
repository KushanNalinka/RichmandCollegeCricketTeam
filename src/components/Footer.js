

// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// import schoolLogo from '../assets/images/FooterLogo.png'; // Adjust the path for the logo image file

// const Footer = () => {
//   return (
//     <footer className="bg-white py-8">
//       <div className="container mx-auto px-4">
//         {/* Top Section */}
//         <div className="flex justify-center items-center">
//           <img
//             src={schoolLogo} // Imported image used here
//             alt="School Logo"
//             className="h-16 mb-4"
//           />
//         </div>
//         {/* Social Media Icons */}
//         <div className="flex justify-center space-x-6 mb-4">
//           <a href="https://facebook.com" target="_blank" rel="noreferrer">
//             <FaFacebookF className="text-gray-600 hover:text-gray-900 text-xl" />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noreferrer">
//             <FaTwitter className="text-gray-600 hover:text-gray-900 text-xl" />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noreferrer">
//             <FaInstagram className="text-gray-600 hover:text-gray-900 text-xl" />
//           </a>
//           <a href="https://youtube.com" target="_blank" rel="noreferrer">
//             <FaYoutube className="text-gray-600 hover:text-gray-900 text-xl" />
//           </a>
//         </div>
//         {/* Links */}
//         <div className="flex justify-center space-x-6 text-sm text-gray-600">
//           <a href="/lms" className="hover:text-gray-900">
//             Access The LMS
//           </a>
//           <a href="/contact" className="hover:text-gray-900">
//             Contact us
//           </a>
//           <a href="/privacy-policy" className="hover:text-gray-900">
//             Privacy Policy
//           </a>
//           <a href="/general-rules" className="hover:text-gray-900">
//             General Rules
//           </a>
//           <a href="/csr" className="hover:text-gray-900">
//             Corporate Social Responsibility
//           </a>
//           <a href="/school-development-society" className="hover:text-gray-900">
//             School Development Society
//           </a>
//         </div>
//         {/* Bottom Section */}
//         <div className="text-center text-gray-600 text-sm mt-4">
//           <p>© 2024</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// import schoolLogo from '../assets/images/FooterLogo.png'; // Adjust the path for the logo image file

// const Footer = () => {
//   return (
//     <footer id="contact-us" className="bg-white py-8">
//       <div className="container mx-auto px-4">
//         {/* Top Section */}
//         <div className="flex justify-center items-center">
//           <img
//             src={schoolLogo} // Imported image used here
//             alt="School Logo"
//             className="h-16 mb-4" // Adjust height for larger screens
//           />
//         </div>
//         {/* Social Media Icons */}
//         <div className="flex justify-center space-x-6 mb-4">
//           <a href="https://facebook.com" target="_blank" rel="noreferrer">
//             <FaFacebookF className="text-gray-600 hover:text-gray-900 text-xl sm:text-2xl" />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noreferrer">
//             <FaTwitter className="text-gray-600 hover:text-gray-900 text-xl sm:text-2xl" />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noreferrer">
//             <FaInstagram className="text-gray-600 hover:text-gray-900 text-xl sm:text-2xl" />
//           </a>
//           <a href="https://youtube.com" target="_blank" rel="noreferrer">
//             <FaYoutube className="text-gray-600 hover:text-gray-900 text-xl sm:text-2xl" />
//           </a>
//         </div>
//         {/* Links */}
//         <div className="flex flex-wrap justify-center space-x-6 text-sm sm:text-base text-gray-600 mb-4">
//           <a href="/lms" className="hover:text-gray-900">
//             Access The LMS
//           </a>
//           <a href="/contact" className="hover:text-gray-900">
//             Contact us
//           </a>
//           <a href="/privacy-policy" className="hover:text-gray-900">
//             Privacy Policy
//           </a>
//           <a href="/general-rules" className="hover:text-gray-900">
//             General Rules
//           </a>
//           <a href="/csr" className="hover:text-gray-900">
//             Corporate Social Responsibility
//           </a>
//           <a href="/school-development-society" className="hover:text-gray-900">
//             School Development Society
//           </a>
//         </div>
//         {/* Bottom Section */}
//         <div className="text-center text-gray-600 text-sm mt-4">
//           <p>© 2024</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import schoolLogo from '../assets/images/FooterLogo.png'; // Adjust the path for the logo image file
import { FiPhone, FiMail } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-white mt-10">
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex-1 bg-[#4A0D34] text-white p-6 flex justify-center items-center">
            <div className="flex items-center space-x-2">
              <FiPhone size={24} />
              <span>0914941717</span>
            </div>
          </div>
          <div className="flex-1 bg-[#CBECFF] text-black p-6 flex justify-center items-center">
            <div className="flex items-center space-x-2">
              <FiMail size={24} />
              <span>richmondcollege.lk</span>
            </div>
          </div>
          <div className="flex-1 bg-[#00175F] text-white p-6 flex justify-center items-center">
            <div className="flex items-center space-x-2">
              <HiOutlineLocationMarker size={24} />
              <span>3633+2W4, Richmond Hill Rd, Galle </span>
            </div>
          </div>
        </div>

        
       {/* Contact Form & Map */}
       <div className="flex justify-center items-center p-8 bg-gray-200   text-white">
          <div className="flex flex-col space-y-4 w-full max-w-md">
            <h2 className="text-2xl mb-4 text-[#00175F] ">Contact Us</h2>
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg bg-[#00175F] text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-[#00175F] text-white"
            />
            <input
              type="text"
              placeholder="Phone"
              className="p-3 rounded-lg bg-[#00175F] text-white"
            />
            <textarea
              placeholder="Type your message"
              className="p-3 rounded-lg bg-[#00175F] text-white"
            ></textarea>
            <button className="bg-[#00175F] text-white p-3 rounded-lg hover:bg-blue-700">
              Send
            </button>
          </div>
          <div className="ml-10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.9736637297841!2d80.20476713619843!3d6.052398003287749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173ef4cc6b88d%3A0xd9c5ef5a5f92100b!2sRichmond%20College!5e0!3m2!1sen!2slk!4v1728029605245!5m2!1sen!2slk"
              width="800"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>


        {/* Footer */}
        <div className="bg-gray-200 py-4">
          <div className="container mx-auto text-center">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={schoolLogo}
                alt="School Logo"
                className="h-16" // Adjust height for consistency
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://web.facebook.com/richmondcollegecricket/?_rdc=1&_rdr" target="_blank" rel="noreferrer">
                <FaFacebookF className="text-gray-600 hover:text-gray-900 text-xl sm:text-2xl" />
              </a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fcheerrichmond" target="_blank" rel="noreferrer">
                <FaTwitter className="text-gray-600 hover:text-gray-900 text-xl sm:text-2xl" />
              </a>
              <a href="https://www.instagram.com/richmondcollege?igsh=aXhoOG9nMWNxZ3hx" target="_blank" rel="noreferrer">
                <FaInstagram className="text-gray-600 hover:text-gray-900 text-xl sm:text-2xl" />
              </a>
              <a href="https://www.youtube.com/channel/UC66Y9YztiHjs3H-kX8_OKPg" target="_blank" rel="noreferrer">
                <FaYoutube className="text-gray-600 hover:text-gray-900 text-xl sm:text-2xl" />
              </a>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm sm:text-base text-gray-600 mb-4">
              <a href="/lms" className="hover:text-gray-900">
                Access The LMS
              </a>
              <a href="/contact" className="hover:text-gray-900">
                Contact us
              </a>
              <a href="/privacy-policy" className="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="/general-rules" className="hover:text-gray-900">
                General Rules
              </a>
              <a href="/csr" className="hover:text-gray-900">
                Corporate Social Responsibility
              </a>
              <a href="/school-development-society" className="hover:text-gray-900">
                School Development Society
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-600 text-sm mt-4">
              <p>© 2024</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
