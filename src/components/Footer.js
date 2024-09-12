// import React from 'react';
// const Footer = () => {
//   return (
//     <footer className="bg-white py-8">
//       <div className="container mx-auto px-4">
//         {/* Top Section */}
//         <div className="flex justify-center items-center">
//           <img
//             src="your-logo-url-here" // Replace with your logo URL
//             alt="School Logo"
//             className="h-16 mb-4"
//           />
//         </div>
//         {/* Social Media Icons */}
//         <div className="flex justify-center space-x-6 mb-4">
//           <a href="https://facebook.com" target="_blank" rel="noreferrer">
//             <i className="fab fa-facebook-f text-gray-600 hover:text-gray-900 text-xl"></i>
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noreferrer">
//             <i className="fab fa-twitter text-gray-600 hover:text-gray-900 text-xl"></i>
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noreferrer">
//             <i className="fab fa-instagram text-gray-600 hover:text-gray-900 text-xl"></i>
//           </a>
//           <a href="https://youtube.com" target="_blank" rel="noreferrer">
//             <i className="fab fa-youtube text-gray-600 hover:text-gray-900 text-xl"></i>
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

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import schoolLogo from '../assets/images/FooterLogo.png'; // Adjust the path for the logo image file

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex justify-center items-center">
          <img
            src={schoolLogo} // Imported image used here
            alt="School Logo"
            className="h-16 mb-4"
          />
        </div>
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="text-gray-600 hover:text-gray-900 text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="text-gray-600 hover:text-gray-900 text-xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-gray-600 hover:text-gray-900 text-xl" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube className="text-gray-600 hover:text-gray-900 text-xl" />
          </a>
        </div>
        {/* Links */}
        <div className="flex justify-center space-x-6 text-sm text-gray-600">
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
        {/* Bottom Section */}
        <div className="text-center text-gray-600 text-sm mt-4">
          <p>© 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
