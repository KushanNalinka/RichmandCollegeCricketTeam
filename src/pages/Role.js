import React from 'react';
import Navbar from '../components/MemberNavbar';
import Footer from '../components/Footer';
import '../index.css';
import topImageDesktop1 from '../assets/images/memebrs.png'; // Desktop image
import topImageMobile from '../assets/images/MB1.png'; // Mobile image
import lahiru from '../assets/images/lahiru.png';

const SponsoredBy = () => {
  const committeeMembers = [
    { id: 1, name: 'Asoka Sirimanne', role: 'President', image: [lahiru] },
    { id: 2, name: 'Indika Udayanga', role: 'Secretary', image: [lahiru] },
    { id: 3, name: 'N. P. Ramanayake', role: 'Treasurer', image: [lahiru] },
    { id: 4, name: 'Dilshan Amarasinghe', role: 'Vice President', image: [lahiru] },
    { id: 5, name: 'Jayamini Senevirathna', role: 'Vice President', image: [lahiru] },
    { id: 6, name: 'Bakthi Mendis', role: 'Assistant Secretary', image: [lahiru] },
    { id: 7, name: 'Samantha Lorensuhewa', role: 'Assistant Treasurer', image: [lahiru] },
    { id: 8, name: 'Lasantha De Silva', role: 'Committee Member', image: [lahiru] },
    { id: 9, name: 'P. A. Gunawardane', role: 'Committee Member', image: [lahiru] },
    { id: 10, name: 'Nishantha Mendis', role: 'Committee Member', image: [lahiru] },
    { id: 11, name: 'C. K. Hewamanna', role: 'Committee Member', image: [lahiru] },
    { id: 12, name: 'Thushan Jayawardane', role: 'Committee Member', image: [lahiru] },
    { id: 13, name: 'Upul Yatawara', role: 'Committee Member', image: [lahiru] },
    { id: 14, name: 'Asitha De Silva', role: 'Committee Member', image: [lahiru] },
    { id: 15, name: 'Mihiruk De Silva', role: 'Committee Member', image: [lahiru]},
    { id: 16, name: 'Banuka Rathnayake', role: 'Committee Member', image: [lahiru] },
    { id: 17, name: 'Chathupama Gunasinghe', role: 'Committee Member', image: [lahiru] },
    { id: 18, name: 'Sanjaya De Silva', role: 'Committee Member', image: [lahiru] },
    { id: 19, name: 'Chamath Siriwardana', role: 'Committee Member', image: [lahiru] },
    { id: 20, name: 'Tharindu Weerasinghe', role: 'Committee Member', image: [lahiru] },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Top Image Section */}
      <div
        className="bg-cover bg-center bg-fixed h-[100vh] md:hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${topImageMobile})`,
        }}
      ></div>

      <div
        className="hidden md:bg-cover md:bg-center md:bg-fixed md:h-[75vh] lg:h-[100vh] md:flex md:items-center md:justify-center"
        style={{
          backgroundImage: `url(${topImageDesktop1})`,
        }}
      ></div>

<div className="bg-[#F9F9F7] py-20">
  <div className="container mx-auto text-center max-w-7xl px-4"> {/* Adjusted to a larger width */}
    <h2 className="text-3xl sm:text-5xl font-bold mb-8">Committee Members</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {committeeMembers.map((member) => (
        <div
          key={member.id}
          className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center"
        >
          <div className="h-64 w-64 mb-4 rounded-full">
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-gray-600">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</div>


           

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SponsoredBy;
