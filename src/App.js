import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Initial from './pages/Initial.js';
import MemberInitial from './pages/MemberInitial.js';
import Profile from './pages/Profile.js';
import Under13 from './pages/Under13.js';
import Under15 from './pages/Under15.js';
import Under17 from './pages/Under17.js';
import Under19 from './pages/Under19.js';
import Coaches from './pages/Coaches.js';
import PlayerInfo from './pages/PlayerInfo.js';
import MatchDetail from './pages/MatchDetail.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Team from './pages/Team.js';
import MatchInfo from './pages/MatchInfo.js';
import AdminMatchInfo from './pages/AdminMatchInfo.js';
import ScorecardData from './pages/ScoreCardData.js';
import PlayerProfile from './pages/playerProfile.js';
import ScoreCardPage from './pages/ScoreCardPage.js';
import CoachProfile from './pages/coachProfile.js';
import AddPlayer from './components/AddPlayer.js';
import AddCoachForm from './components/AddCoachForm.js';
import AdminDashboard from './pages/AdminDashboard.js';
import OfficialProfile from './pages/OfficialProfile.js';
import AddOfficialForm from './components/AddOfficialForm.js';
import ScoreCardPopup from './components/ScoreCardPopup.js';
import InitialNewsPage from './pages/InitialNewsPage.js';
import AdminNewsPage from './pages/AdminNewsPage.js';
import AdminCoaches from './pages/AdminCoaches.js';
import NewsPage from './pages/NewsPage.js'; 
import CoachTable from './pages/CoachInfo.js';
import CoachesProfile from './pages/Coaches.js';
import AboutUs from './pages/AboutUs.js';
import AdminAboutUs from './pages/AdminAboutUs.js';
import InitialAboutUs from './pages/InitialAboutUs.js';
import AdminProfile from './pages/AdminProfile.js';
import NewsCreator from './pages/NewsCreatingPage.js';
import OfficialsTable from './pages/OfficialInfo.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/member" element={<MemberInitial />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/under13" element={<Under13 />} />
         <Route path="/under15" element={<Under15 />} />
         <Route path="/under17" element={<Under17 />} />
         <Route path="/under19" element={<Under19 />} />

         <Route path="/coach" element={<CoachesProfile/>} />
         <Route path="/coachInfo" element={<CoachTable/>} />
      
         <Route path="/admin-profile" element={<AdminProfile />} />
         <Route path="/coach" element={<Coaches />} />
         <Route path="/admin-coach" element={<AdminCoaches />} />
         <Route path='/official' element={<OfficialsTable/>} />
         <Route path='/player' element={<PlayerInfo/>} />
         <Route path='/match' element={<MatchDetail/>} />
         <Route path="/admin-scorecard" element={<ScoreCardPage/>} />
         <Route path="/team" element={<Team />} />
         <Route path='/addPlayerOld' element={<AddPlayer/>}/>
         <Route path='/addPlayer'element={<AddPlayer/>}/>
         <Route path='/addCoach' element={<AddCoachForm/>}/>
         <Route path='/addOfficial' element={<AddOfficialForm/>}/>
         <Route path="/playerProfile" element={<PlayerProfile/>}/>
         <Route path='/coachProfile' element={<CoachProfile/>}/>
         <Route path='/officialProfile' element={<OfficialProfile/>}/>
         <Route path="/match-info" element={<MatchInfo />} />
         <Route path="/scorecard-form" element={<ScoreCardPopup />} />
         <Route path="/scorecard" element={<ScorecardData />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path='/adminDashboard' element={<AdminDashboard/>}/>
         <Route path="/news" element={<NewsPage />} />
         <Route path="/initial-news" element={<InitialNewsPage />} />
         <Route path="/news-create" element={<NewsCreator />} />
         <Route path="/about-us" element={<AboutUs />} />
         <Route path="/admin-about-us" element={<AdminAboutUs />} />
         <Route path="/initial-about-us" element={<InitialAboutUs />} />

         <Route path="/admin-news" element={<NewsCreator />} />
         <Route path="/admin-match-info" element={<AdminMatchInfo />} />



        </Routes>
    </BrowserRouter>
  );
}

export default App;
// "proxy": "https://richmond-cricket.up.railway.app/api/"
// "proxy": "http://localhost:8080/api/"
