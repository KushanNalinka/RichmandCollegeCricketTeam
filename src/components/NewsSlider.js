// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// // Import images (ensure these paths are correct and images exist)
// import image1 from '../assets/images/News.png';
// import image2 from '../assets/images/News.png';
// import image3 from '../assets/images/News.png';
// import image4 from '../assets/images/News.png';
// import image5 from '../assets/images/News.png';
// import image6 from '../assets/images/News.png';

// // Import the background image
// import backgroundImage from '../assets/images/newsback.png';

// const NewsSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     customPaging: (i) => (
//       <div className="dot w-3 h-3 rounded-full bg-gray-500"></div>
//     ),
//     appendDots: (dots) => (
//       <div
//         style={{
//           position: 'absolute',
//           bottom: '-25px',
//           width: '100%',
//         }}
//       >
//         <ul className="m-0 p-0 flex justify-center items-center">{dots}</ul>
//       </div>
//     ),
//     dotsClass: "slick-dots custom-dots",
//   };

//   const newsItems = [
//     {
//       title: "A Great Battle Among Richmond College And Mahinda College",
//       image: image1,
//     },
//     {
//       title: "A Great Battle Among Richmond College And Mahinda College",
//       image: image2,
//     },
//     {
//       title: "A Great Battle Among Richmond College And Mahinda College",
//       image: image3,
//     },
//     {
//       title: "A Great Battle Among Richmond College And Mahinda College",
//       image: image4,
//     },
//     {
//       title: "A Great Battle Among Richmond College And Mahinda College",
//       image: image5,
//     },
//     {
//       title: "A Great Battle Among Richmond College And Mahinda College",
//       image: image6,
//     },
//   ];

//   return (
//     <div className="bg-[#00175F] py-12 relative"
//     style={{
//         backgroundImage: `url(${backgroundImage})`, // Set the background image
//         backgroundSize: 'cover', // Ensure the background image covers the entire div
//         backgroundPosition: 'center', // Center the background image
//         height: '70vh', // Ensures the div takes the full viewport height
//       }}
//     >
//       <h1 style={{ fontSize: '4rem' }} // Adjust the value as needed
//       className="text-white font-bold text-center text-4xl mb-10 mt-6">NEWS</h1>
//       <Slider {...settings}>
//         {newsItems.map((item, index) => (
//           <div key={index} className="px-4">
//             <div
//               className="bg-cover bg-center rounded-lg shadow-lg overflow-hidden relative h-64"
//               style={{ backgroundImage: `url(${item.image})` }}
//             >
//               <div className="bg-gradient-to-b from-transparent to-black opacity-75 absolute inset-0"></div>
//               <div className="absolute bottom-4 left-4 text-white">
//                 <h3 className="text-xl font-bold">{item.title}</h3>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default NewsSlider;
import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";

// Import images (ensure these paths are correct and images exist)
import image1 from '../assets/images/News.png';
import image2 from '../assets/images/News.png';
import image3 from '../assets/images/News.png';
import image4 from '../assets/images/News.png';
import image5 from '../assets/images/News.png';
import image6 from '../assets/images/News.png';

// Import the background image
import backgroundImage from '../assets/images/newsback.png';

const NewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    customPaging: (i) => (
      <div className="dot w-3 h-3 rounded-full bg-gray-500"></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '-25px',
          width: '100%',
        }}
      >
        <ul className="m-0 p-0 flex justify-center items-center">{dots}</ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
  };
  const [newsItems, setNewsItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts`);
        setNewsItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);


  // const newsItems = [
  //   {
  //     title: "A Great Battle Among Richmond College And Mahinda College",
  //     image: image1,
  //   },
  //   {
  //     title: "A Great Battle Among Richmond College And Mahinda College",
  //     image: image2,
  //   },
  //   {
  //     title: "A Great Battle Among Richmond College And Mahinda College",
  //     image: image3,
  //   },
  //   {
  //     title: "A Great Battle Among Richmond College And Mahinda College",
  //     image: image4,
  //   },
  //   {
  //     title: "A Great Battle Among Richmond College And Mahinda College",
  //     image: image5,
  //   },
  //   {
  //     title: "A Great Battle Among Richmond College And Mahinda College",
  //     image: image6,
  //   },
  // ];

  return (
    <div className="bg-[#00175F] py-12 relative"
    style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover', // Ensure the background image covers the entire div
        backgroundPosition: 'center', // Center the background image
        height: '70vh', // Ensures the div takes the full viewport height
      }}
    >
      <h1 style={{ fontSize: '4rem' }} // Adjust the value as needed
      className="text-white font-bold text-center text-4xl mb-10 mt-6">NEWS</h1>
      <Slider {...settings}>
        {newsItems.map((item) => (
          <div key={item.id} className="px-4">
            <div
              className="bg-cover bg-center rounded-lg shadow-lg overflow-hidden relative h-64"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="bg-gradient-to-b from-transparent to-black opacity-75 absolute inset-0"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;