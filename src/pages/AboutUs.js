
import Navbar from '../components/MemberNavbar';
import topImage from '../assets/images/BG3.png'; // Your local background image
import '../index.css'; // Make sure to include your main CSS
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      

      {/* Top Section */}
      <div
        className="bg-cover bg-center bg-fixed h-48 flex items-center justify-center"
        style={{ backgroundImage: `url(${topImage})` }}
      ></div>

      {/* About Richmond School Cricket Team Section */}
      <div className="max-w-7xl mx-auto p-8 flex flex-col lg:flex-row items-center lg:space-x-12">
        {/* Image on the left */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Richmond_College_Main_Hall.jpg/2560px-Richmond_College_Main_Hall.jpg" // Richmond College main hall image
            alt="Richmond School Main Hall"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Text on the right */}
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="text-left text-m font-bold text-gray-800 fancy-font">ABOUT RICHMOND SCHOOL CRICKET TEAM</h2>
          <p className="pt-serif-font text-base text-gray-600 mt-6">
            The Richmond School Cricket Team has a long-standing history of nurturing young talent and building champions.
            Our dedication to fostering both athletic and academic excellence is the cornerstone of our cricketing journey.
            The Richmond School Cricket Team has a long-standing history of nurturing young talent and building champions.
            Our dedication to fostering both athletic and academic excellence is the cornerstone of our cricketing journey.
            The Richmond School Cricket Team has a long-standing history of nurturing young talent and building champions.
            Our dedication to fostering both athletic and academic excellence is the cornerstone of our cricketing journey.
          </p>
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="bg-gray-100 p-8 flex flex-col lg:flex-row items-start">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-left text-m font-bold text-gray-800 fancy-font">OUR JOURNEY</h2>
          <p className="pt-serif-font text-m text-gray-600 mt-4">
            Richmond School Cricket has produced top players who have gone on to represent national teams, with numerous
            victories in inter-school championships. Below are some of the key moments in our journey.
          </p>
          <ul className="list-disc list-inside pt-serif-font text-m text-gray-600 mt-4">
            <li>Inter-School Championship 2015 - Winners</li>
            <li>Produced 5 National-Level Players</li>
            <li>Inter-School Championship 2020 - Finalists</li>
          </ul>
        </div>

        <div className="lg:w-1/2 flex flex-col lg:flex-row lg:space-x-4 justify-center">
          <img
            src="https://www.srilankasports.com/wp-content/uploads/2018/04/z_p16-Richmond-678x381.jpg"
            alt="Richmondites Overcome Peterites to Retain U-19 Cricket Title"
            className="w-full lg:w-1/2 rounded-lg shadow-md"
          />
          <img
            src="http://www.sundaytimes.lk/130217/uploads/DSC_0088-300x226.jpg"
            alt="Richmond Wins Second Time in Three Years"
            className="w-full lg:w-1/2 rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="max-w-7xl mx-auto p-8 text-center">
        <h2 className="text-m font-bold text-gray-800 fancy-font">OUR MISSION</h2>
        <p className="pt-serif-font text-lg text-gray-600 mt-4">
          Our mission is to promote teamwork, discipline, and leadership through cricket, while instilling the values of
          sportsmanship in every player.
        </p>

        <h2 className="text-xl font-bold text-gray-800 fancy-font mt-8">OUR VISION</h2>
        <p className="pt-serif-font text-lg text-gray-600 mt-4">
          Our vision is to develop future cricket stars and foster a sense of community among players and supporters.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-100 p-8">
        <h2 className="text-left text-m font-bold text-gray-800 fancy-font">OUR JOURNEY IN PICTURES</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {/* Change flex direction to row for horizontal alignment */}
          <div className="flex flex-row space-x-6">
            <img
              src="https://xtreamyouth.com/xy_articleimages/2018-03-16_the-richmond-parade-2018_thumb1.jpg"
              alt="Richmond Parade 2018"
              className="w-1/4 rounded-lg shadow-md"
            />
            <img
              src="https://www.xtreamyouth.com/xy_articleimages/2016-10-30_richmond-walk-16_thumb1.jpg"
              alt="Richmond Walk 2016"
              className="w-1/4 rounded-lg shadow-md"
            />
            <img
              src="http://www.sundaytimes.lk/190317/uploads/Sandun-Mendis-and-Vimud-Sapnaka-put-on-a-62-run-partnership-for-the-6th-wicket-save-Richmond-from-being-asked-to-follow-on-resume-their-innings-on-day-two.jpg"
              alt="Richmond Cricket Match"
              className="w-1/4 rounded-lg shadow-md"
            />
            <img
              src="https://i0.wp.com/quadrangle.lk/wp-content/uploads/RichmondCollegeGalle/Richmond-College-Galle-0025.jpg"
              alt="Richmond College Galle"
              className="w-1/4 rounded-lg shadow-md"
            />
          </div>
        </div>

      </div>
      
      <Footer/>
    </div>
  );
};

export default AboutUs;
