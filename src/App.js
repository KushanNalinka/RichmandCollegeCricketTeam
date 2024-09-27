import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Initial from './pages/Initial.js';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
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
          <Route path="/scorecard" element={<ScorecardData />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path='/adminDashboard' element={<AdminDashboard/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

