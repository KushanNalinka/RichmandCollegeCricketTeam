import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Initial from './pages/Initial.js';
import MemberInitial from './pages/MemberInitial.js';
import Profile from './pages/Profile.js';
import Coaches from './pages/Coaches.js';
import PlayerInfo from './pages/PlayerInfo.js';
import MatchDetail from './pages/MatchDetail.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Team from './pages/Team.js';

import MatchInfo from './pages/MatchInfo.js';
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

import NewsPage from './pages/NewsPage.js'; 
import AboutUs from './pages/AboutUs.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/member" element={<MemberInitial />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/coach" element={<Coaches />} />
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
         <Route path="/about-us" element={<AboutUs />} />


        </Routes>
    </BrowserRouter>
  );
}

export default App;

