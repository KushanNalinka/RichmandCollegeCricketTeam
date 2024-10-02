// import React from 'react';
// import firstBackgroundImage from '../assets/images/wallback.png'; // Background image for the first div
// import secondBackgroundImage from '../assets/images/teamback.png'; // Background image for the second div

// const TwoLayeredDiv = () => {
//   return (
//     <div className="relative w-full">
//       {/* First Div - Full width with a taller height and background image */}
//       <div
//         className="w-full h-screen bg-cover bg-center"
//         style={{ backgroundImage: `url(${firstBackgroundImage})` }}
//       ></div>

//       {/* Second Div - Full width with a height of 90% of the first div, positioned with space on top and bottom */}
//       <div
//         className="absolute left-0 right-0 mx-auto"
//         style={{
//           height: '90%',
//           top: '5%',
//           backgroundImage: `url(${secondBackgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* Content inside the second div */}
//         <div className="flex justify-center items-center h-full">
//           <h2 className="text-3xl font-bold text-white">Content on the Second Div</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TwoLayeredDiv;

// import React from 'react';
// import firstBackgroundImage from '../assets/images/wallback.png'; // Background image for the first div
// import secondBackgroundImage from '../assets/images/teamback.png'; // Background image for the second div
// import overlayImage from '../assets/images/News.png'; // Image to be placed on top of the second div

// const TwoLayeredDiv = () => {
//   return (
//     <div className="relative w-full">
//       {/* First Div - Full width with a taller height and background image */}
//       <div
//         className="w-full h-screen bg-cover bg-center"
//         style={{ backgroundImage: `url(${firstBackgroundImage})` }}
//       ></div>

//       {/* Second Div - Full width with a height of 90% of the first div, positioned with space on top and bottom */}
//       <div
//         className="absolute left-0 right-0 mx-auto"
//         style={{
//           height: '90%',
//           top: '5%',
//           backgroundImage: `url(${secondBackgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* Content inside the second div */}
//         <div className="flex justify-center items-center h-full relative">
          

//           {/* Image on top of the second div */}
//           <img
//             src={overlayImage}
//             alt="Overlay"
//             className="absolute"
//             style={{ width: '850px', height: '500px', top: '100px', right: '320px' }} // Adjust these values as needed
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TwoLayeredDiv;

// import React from 'react';
// import Slider from 'react-slick';
// import firstBackgroundImage from '../assets/images/wallback.png'; // Background image for the first div
// import secondBackgroundImage from '../assets/images/teamback.png'; // Background image for the second div
// import overlayImage1 from '../assets/images/News.png'; // Image 1 for slider
// import overlayImage2 from '../assets/images/News.png'; // Image 2 for slider
// import overlayImage3 from '../assets/images/News.png'; // Image 3 for slider
// import overlayImage4 from '../assets/images/News.png'; // Image 4 for slider

// const TwoLayeredDiv = () => {
//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="relative w-full">
//       {/* First Div - Full width with a taller height and background image */}
//       <div
//         className="w-full h-screen bg-cover bg-center"
//         style={{ backgroundImage: `url(${firstBackgroundImage})` }}
//       ></div>

//       {/* Second Div - Full width with a height of 90% of the first div, positioned with space on top and bottom */}
//       <div
//         className="absolute left-0 right-0 mx-auto"
//         style={{
//           height: '90%',
//           top: '5%',
//           backgroundImage: `url(${secondBackgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* Content inside the second div */}
//         <div className="flex justify-center items-center h-full relative">
          
//           {/* Image slider */}
//           <div className="absolute" style={{ width: '850px', height: '500px', top: '80px', right: '320px' }}>
//             <Slider {...settings}>
//               <div>
//                 <img src={overlayImage1} alt="Overlay 1" style={{ width: '100%', height: '100%' }} />
//               </div>
//               <div>
//                 <img src={overlayImage2} alt="Overlay 2" style={{ width: '100%', height: '100%' }} />
//               </div>
//               <div>
//                 <img src={overlayImage3} alt="Overlay 3" style={{ width: '100%', height: '100%' }} />
//               </div>
//               <div>
//                 <img src={overlayImage4} alt="Overlay 4" style={{ width: '100%', height: '100%' }} />
//               </div>
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TwoLayeredDiv;
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
// import 'slick-carousel/slick/slick-theme.css'; // Import slick theme CSS
// import firstBackgroundImage from '../assets/images/wallback.png'; // Background image for the first div
// import secondBackgroundImage from '../assets/images/teamback.png'; // Background image for the second div
// import overlayImage1 from '../assets/images/News.png'; // Image 1 for slider
// import overlayImage2 from '../assets/images/News.png'; // Image 2 for slider
// import overlayImage3 from '../assets/images/News.png'; // Image 3 for slider
// import overlayImage4 from '../assets/images/News.png'; // Image 4 for slider

// const TwoLayeredDiv = () => {
//   // Slider settings with autoplay
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Enable auto-sliding
//     autoplaySpeed: 2000, // Set the speed for auto-sliding (3000ms = 3s)
//   };

//   return (
//     <div className="relative w-full">
//       {/* First Div - Full width with a taller height and background image */}
//       <div
//         className="w-full h-screen bg-cover bg-center"
//         style={{ backgroundImage: `url(${firstBackgroundImage})` }}
//       ></div>

//       {/* Second Div - Full width with a height of 90% of the first div, positioned with space on top and bottom */}
//       <div
//         className="absolute left-0 right-0 mx-auto"
//         style={{
//           height: '90%',
//           top: '5%',
//           backgroundImage: `url(${secondBackgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* Content inside the second div */}
//         <div className="flex justify-center items-center h-full relative">
          
//           {/* Image slider */}
//           <div className="absolute" style={{ width: '850px', height: '500px', top: '100px', right: '360px' }}>
//             <Slider {...settings}>
//               <div>
//                 <img src={overlayImage1} alt="Overlay 1" style={{ width: '100%', height: '100%' }} />
//               </div>
//               <div>
//                 <img src={overlayImage2} alt="Overlay 2" style={{ width: '100%', height: '100%' }} />
//               </div>
//               <div>
//                 <img src={overlayImage3} alt="Overlay 3" style={{ width: '100%', height: '100%' }} />
//               </div>
//               <div>
//                 <img src={overlayImage4} alt="Overlay 4" style={{ width: '100%', height: '100%' }} />
//               </div>
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TwoLayeredDiv;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme CSS
import firstBackgroundImage from '../assets/images/wallback.png'; // Background image for the first div
import secondBackgroundImage from '../assets/images/teamGroup.png'; // Background image for the second div

// Import images directly
import overlayImage1 from '../assets/images/News.png'; // Image 1 for slider
import overlayImage2 from '../assets/images/News.png'; // Image 2 for slider
import overlayImage3 from '../assets/images/News.png'; // Image 3 for slider
import overlayImage4 from '../assets/images/News.png'; // Image 4 for slider

// Define the JSON array for images using imported images
const imageData = [
  { id: 1, src: overlayImage1, alt: 'Overlay 1' },
  { id: 2, src: overlayImage2, alt: 'Overlay 2' },
  { id: 3, src: overlayImage3, alt: 'Overlay 3' },
  { id: 4, src: overlayImage4, alt: 'Overlay 4' }
];

const TwoLayeredDiv = () => {
  // Slider settings with autoplay
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 2000, // Set the speed for auto-sliding (2000ms = 2s)
  };

  return (
    <div className="relative w-full">
      {/* First Div - Full width with a taller height and background image */}
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${firstBackgroundImage})` }}
      ></div>

      {/* Second Div - Full width with a height of 90% of the first div, positioned with space on top and bottom */}
      <div
        className="absolute left-0 right-0 mx-auto w-full"
        style={{
          height: '90%',
          top: '5%',
          backgroundImage: `url(${secondBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', // Prevent repeating the image
          
        }}
      >
        {/* Content inside the second div */}
        <div className="flex justify-center items-center h-full relative">
          
          {/* Image slider */}
          <div className="absolute" style={{ width: '850px', height: '500px', top: '100px', right: '360px' }}>
            <Slider {...settings}>
              {imageData.map((image) => (
                <div key={image.id}>
                  <img src={image.src} alt={image.alt} style={{ width: '100%', height: '100%' }} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoLayeredDiv;

